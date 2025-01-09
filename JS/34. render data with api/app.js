let allData = [];
let getData = async () => {
  try {
    let data = await fetch(
      "http://universities.hipolabs.com/search?country=United+States"
    );
    data = await data.json();
    // console.log(data);
    allData = [...data];
  } catch (error) {
    console.error(error);
  }
};
getData().then(()=>{
  renderData() //
});

let renderData = ()=>{
  if(allData){
    // console.log(allData);
    allData.length = 20
    document.querySelector(".main").innerHTML = ''
    allData?.map((obj) => {
      document.querySelector(".main").innerHTML += `
      <div class='box'>
      ${obj?.name}
      <div>
      ${obj?.domains[0]}
      </div>
      </div>
      `;
    });
  }
  }
renderData();

let getFilter = (value)=>{
  console.log(value)
  if(!value.length<1) {
    let getfilterData = allData?.filter(obj => obj?.name.toLowerCase() == value.toLowerCase())
    if(getfilterData){
      document.querySelector(".main").innerHTML = `
      <div class='box'>
      ${getfilterData[0]?.name || 'no data'}
      <div>
      ${getfilterData[0]?.domains[0] || 'no data'}
      </div>
      </div>
      `; 
      return
    }
  }
  renderData();
}