class B {
  constructor(prop1, prop2, prop3) {
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = prop3;
  }
}

function mapAToB(a) {
  const b = new B(
    a.prop1,
    a.prop2,
    a.prop3
  );

  return b;
}

module.exports = mapAToB;