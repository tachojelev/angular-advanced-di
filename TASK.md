# Dependency Injection Task

1. Create a new Angular project or use an existing one if you have a suitable one.
2. Create a new VenicleModule and a VenicleService for it.
4. Create a method inside the VenicleService that returns an Observable of an array of venicles. Each venicle should have a make (brand), model, year and type (car | truck). All venicles that are returned should be of type - car.
5. Create a Venicle component that displays the information for a single venicle. The component should have a black border around itself and a box shadow. The box shadow should only be visible based on the value of a component's @Input.
6. Display all venicles when the application loads.
7. Create a new TruckService for the VenicleModule and provide it whenever the VenicleService is requested.
8. *The TruckService should also return an Observable of an array of venicles, but all of them should be of type - truck. (Only trucks should be displayed when the application loads)
10. Create a new injection token that has a type of VenicleDefaultOptions. VenicleDefaultOptions should have a field for controlling whether the box shadow of the venicle should be visible if token is provided.
11. Provide the injection token for the entire application and disable the box shadow of all venicles through it.
12. Create a new ColorService that has a public color property ('red' | 'blue'). Provide the service in the app component and the venicle component with different colors. The color from the app component should be used.
