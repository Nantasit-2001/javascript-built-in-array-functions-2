const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
//   let checkcarBra = carCollection.indexOf(carBrand); 
//   let result = checkcarBra < 0 ? `new car collection is : ${carCollection.concat(carBrand)}`
//   : `${carBrand} has already existed in the ${checkcarBra} position of car collection.`
//   return result; 
// }

let checkcarBra = carCollection.indexOf(carBrand); 
 if (checkcarBra < 0) {
  carCollection.push(carBrand); 
  return `new car collection is : ${carCollection} `; 
} else if (checkcarBra >= 0) {
  return `${carBrand} has already existed in the ${checkcarBra+1} position of car collection.` 
}; 
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.

