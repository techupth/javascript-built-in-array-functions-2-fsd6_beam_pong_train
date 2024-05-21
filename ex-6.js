const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  console.log(carCollection.indexOf(carBrand));
  const carIndex = carCollection.indexOf(carBrand);
  console.log(carIndex);
  return carIndex >= 0
    ? `${carBrand} has already existed in the ${carIndex + 1} of car collection`
    : `new car collection is: ${carCollection.concat(carBrand)}`;
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
