import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call the constructor of the parent class (Car)
    super(brand, motor, color);

    // Initialize the range attribute
    this._range = range;
  }

  // Method to clone an EVCar object
  cloneCar() {
    // Get the constructor of the current instance
    const NewObj = this.constructor[Symbol.species] || this.constructor;

    // Create a new instance using the constructor
    const clone = new NewObj();

    // Return the cloned instance
    return clone;
  }
}
