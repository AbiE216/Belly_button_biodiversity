//create an event listener/ whenever there is a change to the HTML body the updatepage function is called
d3.selectAll("body").on("change", updatePage);

function updatePage() {
  // uses d3.selectAll() to select drop down menu, which has an id instead of select option
  var dropdownMenu = d3.selectAll("#selectOption").node();
  //the id of the drop down menu, select option is assigned to the variable dropdownMenuId
  var dropdownMenuID = dropdownMenu.id;
  //whenever a dropdown menu option is selected, its assigned the variable selected Option
  var selectedOption = dropdownMenu.value;
  // each time updatePage is triggered the id value and the value of the chosen menu option are printed in the console
  console.log(dropdownMenuID);
  console.log(selectedOption);
};

d3.json("samples.json").then(function(data){
    console.log(data);
});

//Extract only the washing frequency for each person in the array
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
// sort the washing frequency in descending order        
person.wfreq).sort((a,b) => b - a);
//remove null values
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});