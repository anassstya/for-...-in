export const orderByProps = (obj, sort) => {
  let entries = Object.entries(obj);
  let entriesSorted = entries.sort();
  let result = [];
  let firstSorted = [];

  for(let i in entriesSorted){
    for(let j in sort){
      if(entriesSorted[i][0].includes(sort[j])){
        firstSorted.push(entries[i]);
      };
    };
  }

  for(let i in entriesSorted){
    for(let j in sort){
      if(entriesSorted[i][0].includes(sort[j])){
        entriesSorted.splice(entriesSorted.indexOf(entriesSorted[i]));
      };
    };
  }
  
  for(let y in firstSorted){
    entriesSorted.unshift(firstSorted[y]);
  }

  for(let q in entriesSorted){
    let sortObj = {};
    sortObj["key"] = entriesSorted[q][0];
    sortObj["value"] = entriesSorted[q][1];
    result.push(sortObj);
  }

  return result
};

const obj1 = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
let sort1 = ["name", "level"];
orderByProps(obj1, sort1)