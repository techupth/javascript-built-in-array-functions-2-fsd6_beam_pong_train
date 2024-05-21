const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let result = carCollection.indexOf(carBrand);
  if (result === -1) {
    carCollection.push(carBrand);
    return `New car collection is: ${carCollection}`;
  } else {
    let check = carCollection.indexOf(carBrand) + 1;
    return `${carBrand} already exists in position ${check} of the car collection.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("honda")); //toyota has already existed in the 1 position of car collection.
