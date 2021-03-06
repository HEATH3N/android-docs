---
title: "Milestones"
description: "Mapbox Android Navigation SDK milestones"
sideNavSections:
  - title: "Default milestones"
  - title: "Building a custom milestone"
  - title: "Custom instructions"
  - title: "Milestone event listener"
---
# Milestones

Navigation milestones inside the SDK provide a powerful way to give your user instructions at custom defined locations along their route. Aside from the default milestones that you'd expect from a Navigation SDK, you can create custom milestones that fit your particular app needs.

## Default milestones

Out of the box, the Navigation SDK includes a handful of milestones; these are common notifications users would expect to receive while navigating along a route. You'll find more information on the specific nature and possibilities with milestones in the next section, which discusses building a custom milestone. All the default milestones include a unique identifier that's useful inside the MilestoneEventListener callback. All the default options also provide an instruction String useful for voice announcements. The table below lists the default milestones, their identifiers and the instruction syntax.

Identifier            | Instruction syntax                                                                                                                                                                                   | Description
--------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
`URGENT_MILESTONE`    | `{instruction}` or `{instruction} then {next-step-instruction}` depending on the length of the next step.                                                                                                | Triggered when the user is x seconds away from the maneuver point, or 10 meters from the maneuver; whichever one occurs first will trigger the milestone. Only triggered once per step.
`IMMINENT_MILESTONE`  | `Continue on {street-name} for {distance-remaining}`                                                                                                                                                   | Triggered when the step total distance is greater than 400 meters, and the total duration is within 70 seconds of the next maneuver.
`NEW_STEP_MILESTONE`  | `In {distance-remaining} {instruction}`                                                                                                                                                                | Triggered when the user begins traversing along a new step that is not the first or last step in the route.
`DEPARTURE_MILESTONE` | `Continue on {street-name} for {distance-remaining} and the``n {instruction}` or `{instruction} then in {distance-remaining} {next-instruction}` depending on how spread out the step maneuvers are. | Occurs when the user first departs from their current location and begins a navigation session.
`ARRIVAL_MILESTONE`   | `{instruction}`                                                                                                                                                                                        | Triggered when the user is less than 25 meters away from the final maneuver.

These get added to the navigation session at initialization time. Therefore, if you'd like to remove all the default milestones, you'll need to use `MapboxNavigationOptions.setDefaultMilestonesEnabled()` and pass in the options object while initializing `MapboxNavigation`.

The default instructions are all set up for driving navigation. If you are interested in also supporting walking and cycling navigation, custom milestones will likely need to be built and added to handle the unique situations your user might run into while navigating.

## Building a custom milestone

Milestones bring flexibility to your app and how it handles navigation events. Creating a milestone is done in just a few steps. First, choose how frequently you'd like the milestone to be triggered. Two options are currently provided, `StepMilestone`, which is triggered each step in the route and `RouteMilestone`, which will only get trigger once during the entire route. You can also implement your own behavior for triggers by extending the `Milestone` class. Give the milestone a unique identifier which can be used to determine which milestone triggered the `onMilestoneEvent` callback. Set the triggers using any combination of the properties shown in the table below. It is important to note that trigger properties have different corresponding variable types that need to be accounted for when setting the milestone up. Lastly, build the milestone and pass it into the `MapboxNavigation` instance using `addMilestone()`.

The snippet of code provided below shows the creation of a `RouteMilestone` with two conditions, both of which need to be true for the milestone to be triggered. Since it is a `RouteMilestone`, the milestone event only occurs once. The trigger statement can be read as: both the step index must be less than 3 and the current step total distance must be greater than 200 meters for the milestone to be triggered.

```java
navigation.addMilestone(new RouteMilestone.Builder()
  .setIdentifier("begin-route-milestone")
  .setTrigger(
    Trigger.all(
      Trigger.lt(TriggerProperty.STEP_INDEX, 3),
      Trigger.gt(TriggerProperty.STEP_DISTANCE_TOTAL_METERS, 200)
    )
  ).build());
```

### Trigger conditions

Besides the triggers already mentioned above, the SDK comes equipped to handle pretty much any case you'd like to build. The table below shows all the conditions currently offered inside the SDK and whether it is a compound statement or a simple statement.

Condition name | Type     | Description
-------------- | -------- | ---------------------------------------------------------------------------------------------------------------
all            | Compound | Logical equivalent to an `AND` statement, all the conditions must be true for the trigger to occur.
any            | Compound | Logical equivalent to an `OR` statement, any of the conditions can be true to cause a trigger.
none           | Compound | Logical equivalent to a `NOR` statement, all statements must equate to false for a trigger to occur.
eq             | Simple   | Equality. The trigger property's current value must equal the exact value defined.
neq            | Simple   | Inequality. The trigger property's current value must not equal the exact value defined.
gt             | Simple   | Greater than. The trigger property's current value must be greater than the defined value.
gte            | Simple   | Greater than or equal. The trigger property's current value must be greater than or equal to the defined value.
lt             | Simple   | Less than. The trigger property's current value must be less than the defined value
lte            | Simple   | Less than or equal. The trigger property's current value must be less than or equal to the defined property.

### Trigger properties

Below are the available trigger properties that can be used along with the conditions above to filter when a milestone should be triggered. Note that instead of the boolean types using the primitive type `true` or `false`, the `TriggerProperty` class uses custom boolean values for the triggers.

Property name                   | Type    | Description
------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------
STEP_INDEX                      | integer | Which step or steps the user must be on the trigger the milestone.
STEP_DISTANCE_TOTAL_METERS      | double  | The length that the current step must be.
STEP_DISTANCE_REMAINING_METERS  | double  | Will trigger the milestone based on the distance remaining.
STEP_DURATION_REMAINING_SECONDS | double  | Will trigger the milestone based on the duration remaining.
STEP_DURATION_TOTAL_SECONDS     | double  | Will trigger the milestone based on the total step duration.
STEP_DISTANCE_TRAVELED_METERS   | double  | Will trigger the milestone based on the distance the user has traveled along the step already.
NEW_STEP                        | boolean | When the user completes a maneuver and begins traversing along a new step.
FIRST_STEP                      | boolean | When the user begins a navigation session and is currently on the first step.
LAST_STEP                       | boolean | When the user is on the second to last step. Note the final step in direction route will only contain a point representing the final maneuver.
NEXT_STEP_DISTANCE_METERS       | double  | The next step's total distance in meters.
FIRST_LEG                       | boolean | When the user is on the first leg.
LAST_LEG                        | boolean | When the user is on the last leg.

We are actively adding more and more trigger properties every day while we continue building out the milestones API. Please [open an issue on GitHub](https://github.com/mapbox/mapbox-navigation-android/issues/new) if you feel a trigger property is missing and include the use-case.

## Custom instructions

You'll see in the next section about the milestone event listener that the callback provides a `String` instruction value. During the milestone creation process, you can add the logic that generates this instruction. Begin by creating a new `Instruction` object which will provide an override method, `buildInstruction`, which provides a `RouteProgress` object for producing the instructions string. With the provided route progress, you can add information such as distance and duration remaining until the next maneuver. Once the `Instruction` is initialized, you will need to give it to the milestone using `setInstruction`. The example below shows how to add the directions API instruction with no modifications as the milestone instruction.

```java
Instruction myInstruction = new Instruction() {
  @Override
  public String buildInstruction(RouteProgress routeProgress) {
    return routeProgress.getCurrentLegProgress().getUpComingStep().getManeuver().getInstruction();
  }
});
```

## Milestone event listener

All the milestones use the `onMilestoneEvent` callback to alert when they get triggered. If you want to make use of the milestones API, you will want to attach a `MilestoneEventListener` inside your app. When all the milestone trigger conditions are true, the callback is invoked and provides you with the latest routeProgress along with the milestones corresponding `String` instruction and identifier. The identifier is critical if you have multiple milestones that you would like to isolate logic to. You can also use your text-to-speech engine of choice and have it consume the instruction.
