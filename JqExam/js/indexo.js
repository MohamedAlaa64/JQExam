$(document).ready(function(){
    $('.sk-folding-cube').fadeOut(1000 , function(){
        $('#louding').fadeOut()
        $('body').css({overflow:"auto"});
})
})

$('#navopen').click(function (){
    $('#navy').animate({left:"0%"},500);

    $('#navopen').removeClass('d-block') ;
    $('#navopen').addClass('d-none') ;
    $('#navclose').removeClass('d-none') ;
    $('#navclose').addClass('d-block') ;
    $('.links ul').show(500);
    $('.links li').animate({top:0},500);
})

$('#navclose').click(function (){
    $('#navy').animate({left:"-18%"},500);

    $('#navclose').removeClass('d-block') ;
    $('#navclose').addClass('d-none') ;
    $('#navopen').removeClass('d-none') ;
    $('#navopen').addClass('d-block') ;
    $('.links ul').hide(1000);
    $('.links li').animate({top:"200px"},1000);
})

//api for gallary
let maingallery = [];
async function getphoto() {
    let response =  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let finalres = await response.json() ;
    maingallery.push(finalres.meals);
    display(maingallery[0]);
}
getphoto()

function display(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=`<div onclick="details(${i})" class="col-md-3 mealCard" >
        <img src="${arr[i].strMealThumb}" class="w-100 img-thumbnail" alt="meal">
        <div class="mealOverLay"><h3>${arr[i].strMeal}</h3></div>
    </div>` ;
        
    }
    document.getElementById('gallery').innerHTML=cartonna ;
}
function details(index){
    $('#Home').removeClass('d-flex') ;
    $('#Home').addClass('d-none') ;
    $('#detailsec').removeClass('d-none') ;
    $('#detailsec').removeClass('d-block') ;

   let cartonna=`  <div class="row">
   <div class="col-md-4">
       <img src="${maingallery[0][index].strMealThumb}" class="w-100 img-thumbnail" alt="${maingallery[0][index].strMeal}">
       <h3>${maingallery[0][index].strMeal}</h3>
   </div>
   <div  class="col-md-8 secondpagetext">
       <h2>Instructions</h2>
       <p>${maingallery[0][index].strInstructions}</p>
       <h3>Area :${maingallery[0][index].strArea}</h3>
       <h3>Category :${maingallery[0][index].strCategory}</h3>
       <h3>Recipes :</h3>
       <ul class="d-flex flex-wrap list-unstyled justify-content-between gap-2" id="hla">
           <li class="btn  dtailli">${maingallery[0][index].strMeasure1}${maingallery[0][index].strIngredient1}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure2}${maingallery[0][index].strIngredient2}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure3}${maingallery[0][index].strIngredient3}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure4}${maingallery[0][index].strIngredient4}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure5}${maingallery[0][index].strIngredient5}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure6}${maingallery[0][index].strIngredient6}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure7}${maingallery[0][index].strIngredient7}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure8}${maingallery[0][index].strIngredient8}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure9}${maingallery[0][index].strIngredient9}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure10}${maingallery[0][index].strIngredient10}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure11}${maingallery[0][index].strIngredient11}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure12}${maingallery[0][index].strIngredient12}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure13}${maingallery[0][index].strIngredient13}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure14}${maingallery[0][index].strIngredient14}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure15}${maingallery[0][index].strIngredient15}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure16}${maingallery[0][index].strIngredient16}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure17}${maingallery[0][index].strIngredient17}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure18}${maingallery[0][index].strIngredient18}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure19}${maingallery[0][index].strIngredient19}</li>
           <li class="btn  dtailli">${maingallery[0][index].strMeasure20}${maingallery[0][index].strIngredient20}</li>
           
       </ul>
       <h3>Tags :</h3>
       <li class="btn  btn-sm dtailtag">${maingallery[0][index].strTags}</li>
       <br><br>
       <button class="btn bg-info dtailbtn "><a href="${maingallery[0][index].strSource}">Source</a></button>
       <button class="btn bg-danger dtailbtn"><a href="${maingallery[0][index].strYoutube}">YouTupe</a></button>
   </div>
</div>` ;



document.getElementById('detailpage').innerHTML=cartonna ;

let checkerOfUl=document.getElementById('hla') ;
for (let i = 0; i < checkerOfUl.children.length; i++) {
   if ($(checkerOfUl.children[i]).text().length<=2) {
    $(checkerOfUl.children[i]).addClass("d-none");
   }
   
}
}
// close all 
function close() {
    $('#detailsec').removeClass('d-block') ;
    $('#detailsec').addClass('d-none') ;
    $('#Home').removeClass('d-flex') ;
    $('#Home').addClass('d-none') ;
    $('#searchPage').removeClass('d-block') ;
    $('#searchPage').addClass('d-none') ; 

    $('#navy').animate({left:"-18%"},500);
    $('#navclose').removeClass('d-block') ;
    $('#navclose').addClass('d-none') ;
    $('#navopen').removeClass('d-none') ;
    $('#navopen').addClass('d-block') ;
    $('.links ul').hide(1000);
    $('.links li').animate({top:"200px"},1000);
    $('#categorisPage').removeClass('d-block') ;
    $('#categorisPage').addClass('d-none') ;
    $('#AreaPage').removeClass('d-block') ;
    $('#AreaPage').addClass('d-none') ;
    $('#IngrediantsPage').removeClass('d-block') ;
    $('#IngrediantsPage').addClass('d-none') ;
    $('#contactPage').removeClass('d-block') ;
    $('#contactPage').addClass('d-none') ;
}
let searcharr=[] ;
async function searchmeal(name) {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    let finalres = await response.json() ;
    if(finalres.meals!=null){
    searcharr=finalres.meals;
    displaysearch(searcharr);

    }
    
}
function displaysearch(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=`<div onclick="detailssearch(${i})" class="col-md-3 mealCard" >
        <img src="${arr[i].strMealThumb}" class="w-100 img-thumbnail" alt="meal">
        <div class="mealOverLay"><h3>${arr[i].strMeal}</h3></div>
    </div>` ;
        
    }
    document.getElementById('searchResults').innerHTML=cartonna ;
}

function detailssearch(index){
   close();
   $('#detailsec').removeClass('d-none') ;
   $('#detailsec').removeClass('d-block') ;

   let cartonna=`  <div class="row">
   <div class="col-md-4">
       <img src="${searcharr[index].strMealThumb}" class="w-100 img-thumbnail" alt="${searcharr[index].strMeal}">
       <h3>${searcharr[index].strMeal}</h3>
   </div>
   <div  class="col-md-8 secondpagetext">
       <h2>Instructions</h2>
       <p>${searcharr[index].strInstructions}</p>
       <h3>Area :${searcharr[index].strArea}</h3>
       <h3>Category :${searcharr[index].strCategory}</h3>
       <h3>Recipes :</h3>
       <ul class="d-flex flex-wrap list-unstyled justify-content-between gap-2" id="hla">
           <li class="btn  dtailli">${searcharr[index].strMeasure1}${searcharr[index].strIngredient1}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure2}${searcharr[index].strIngredient2}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure3}${searcharr[index].strIngredient3}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure4}${searcharr[index].strIngredient4}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure5}${searcharr[index].strIngredient5}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure6}${searcharr[index].strIngredient6}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure7}${searcharr[index].strIngredient7}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure8}${searcharr[index].strIngredient8}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure9}${searcharr[index].strIngredient9}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure10}${searcharr[index].strIngredient10}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure11}${searcharr[index].strIngredient11}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure12}${searcharr[index].strIngredient12}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure13}${searcharr[index].strIngredient13}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure14}${searcharr[index].strIngredient14}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure15}${searcharr[index].strIngredient15}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure16}${searcharr[index].strIngredient16}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure17}${searcharr[index].strIngredient17}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure18}${searcharr[index].strIngredient18}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure19}${searcharr[index].strIngredient19}</li>
           <li class="btn  dtailli">${searcharr[index].strMeasure20}${searcharr[index].strIngredient20}</li>
           
       </ul>
       <h3>Tags :</h3>
       <li class="btn  btn-sm dtailtag">${searcharr[index].strTags}</li>
       <br><br>
       <button class="btn bg-info dtailbtn "><a href="${searcharr[index].strSource}">Source</a></button>
       <button class="btn bg-danger dtailbtn"><a href="${searcharr[index].strYoutube}">YouTupe</a></button>
   </div>
</div>` ;
document.getElementById('detailpage').innerHTML=cartonna ;

let checkerOfUl=document.getElementById('hla') ;
for (let i = 0; i < checkerOfUl.children.length; i++) {
   if ($(checkerOfUl.children[i]).text().length<=2) {
    $(checkerOfUl.children[i]).addClass("d-none");
   }
   
}
}
$('#searchBtn').click(function () {

    close() ;
    $('#searchPage').removeClass('d-none') ;
    $('#searchPage').addClass('d-block') ;
    
}) 
$('#categBtn').click(function () {

    close() ;
    $('#categorisPage').removeClass('d-none') ;
    $('#categorisPage').addClass('d-block') ;
    getcateg()
}) 
let categarr=[]
async function getcateg() {
    let response =  await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let finalres = await response.json() ;
    categarr.push(finalres.categories);
    displaycateg(categarr[0]);
}
function displaycateg(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=` <div class="col-md-3 categoryCard" onClick="catdetails(${i})">
        <img src="${arr[i].strCategoryThumb}" class="w-100" alt="${arr[i].strCategory}" >
        <div class="overlay categoryOverLay text-center ">
            <h3 >${arr[i].strCategory}</h3>
            <p>${arr[i].strCategoryDescription}</p>
        </div>
    </div>` ;
        
    }
    document.getElementById('categorisResults').innerHTML=cartonna ;
}

let categDetails=[] ;
async function  catdetails(indexo) {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categarr[0][indexo].strCategory}`);
    let finalres = await response.json() ;
    categDetails=finalres.meals;
    displaycategdetails(categDetails)
    
}
function displaycategdetails(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=`<div  class="col-md-3 mealCard" onClick="searchById(${arr[i].idMeal})" >
        <img src="${arr[i].strMealThumb}" class="w-100 img-thumbnail" alt="meal">
        <div class="mealOverLay"><h3>${arr[i].strMeal}</h3></div>
    </div>` ;
        
    }
    document.getElementById('categorisResults').innerHTML=cartonna ;
}
let idContainer=[];
async function searchById(idNum) {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNum}`);
    let finalres = await response.json() ;
    idContainer=finalres.meals;
    idsearch()
}
function idsearch(){
    close();
    $('#detailsec').removeClass('d-none') ;
    $('#detailsec').removeClass('d-block') ;
 
    let cartonna=`  <div class="row">
    <div class="col-md-4">
        <img src="${idContainer[0].strMealThumb}" class="w-100 img-thumbnail" alt="${idContainer[0].strMeal}">
        <h3>${idContainer[0].strMeal}</h3>
    </div>
    <div  class="col-md-8 secondpagetext">
        <h2>Instructions</h2>
        <p>${idContainer[0].strInstructions}</p>
        <h3>Area :${idContainer[0].strArea}</h3>
        <h3>Category :${idContainer[0].strCategory}</h3>
        <h3>Recipes :</h3>
        <ul class="d-flex flex-wrap list-unstyled justify-content-between gap-2" id="hla">
            <li class="btn  dtailli">${idContainer[0].strMeasure1}${idContainer[0].strIngredient1}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure2}${idContainer[0].strIngredient2}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure3}${idContainer[0].strIngredient3}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure4}${idContainer[0].strIngredient4}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure5}${idContainer[0].strIngredient5}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure6}${idContainer[0].strIngredient6}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure7}${idContainer[0].strIngredient7}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure8}${idContainer[0].strIngredient8}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure9}${idContainer[0].strIngredient9}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure10}${idContainer[0].strIngredient10}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure11}${idContainer[0].strIngredient11}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure12}${idContainer[0].strIngredient12}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure13}${idContainer[0].strIngredient13}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure14}${idContainer[0].strIngredient14}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure15}${idContainer[0].strIngredient15}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure16}${idContainer[0].strIngredient16}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure17}${idContainer[0].strIngredient17}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure18}${idContainer[0].strIngredient18}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure19}${idContainer[0].strIngredient19}</li>
            <li class="btn  dtailli">${idContainer[0].strMeasure20}${idContainer[0].strIngredient20}</li>
            
        </ul>
        <h3>Tags :</h3>
        <li class="btn  btn-sm dtailtag">${idContainer[0].strTags}</li>
        <br><br>
        <button class="btn bg-info dtailbtn "><a href="${idContainer[0].strSource}">Source</a></button>
        <button class="btn bg-danger dtailbtn"><a href="${idContainer[0].strYoutube}">YouTupe</a></button>
    </div>
 </div>` ;
 document.getElementById('detailpage').innerHTML=cartonna ;
 
 let checkerOfUl=document.getElementById('hla') ;
 for (let i = 0; i < checkerOfUl.children.length; i++) {
    if ($(checkerOfUl.children[i]).text().length<=2) {
     $(checkerOfUl.children[i]).addClass("d-none");
    }
    
 }
 }
 $('#AreaBtn').click(function () {

    close() ;
    $('#AreaPage').removeClass('d-none') ;
    $('#AreaPage').addClass('d-block') ;
    getArea()
}) 
let AreaMain=[];
async function getArea() {
    let response =  await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let finalres = await response.json() ;
    AreaMain=finalres.meals;
    displayArea(AreaMain);
}
function displayArea(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=` <div class="col-md-3 areaCol text-center"onClick= "ChosenArea(${i})">
        <i class="fa-solid fa-house-laptop"></i>
        <h3>${arr[i].strArea}</h3>
    </div>
    ` ;
        
    }
    document.getElementById('Areaplace').innerHTML=cartonna ;
}
let ChosenOne=[] ;
async function ChosenArea(indexy) {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${AreaMain[indexy].strArea}`);
    let finalres = await response.json() ;
    ChosenOne=finalres.meals ;
    displayChosen(ChosenOne);
}
function displayChosen(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=`<div  class="col-md-3 mealCard" onClick="searchById(${arr[i].idMeal})" >
        <img src="${arr[i].strMealThumb}" class="w-100 img-thumbnail" alt="meal">
        <div class="mealOverLay"><h3>${arr[i].strMeal}</h3></div>
    </div>` ;
        
    }
    document.getElementById('Areaplace').innerHTML=cartonna ;
}
$('#IngrediantsBtn').click(function () {

    close() ;
    $('#IngrediantsPage').removeClass('d-none') ;
    $('#IngrediantsPage').addClass('d-block') ;
    getIngrediatn()
})
let ingredMain=[]
async function getIngrediatn() {
    let response =  await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    let finalres = await response.json() ;
    ingredMain=finalres.meals;
    displayingred(ingredMain);
}
function displayingred(arr) {
    let cartonna=`` ;
    for (let i = 0; i < 25; i++) {
        cartonna +=` <div class="col-md-3 ingredCol text-center" onClick="Choseningred(${i})">
        <i class="fa-solid fa-drumstick-bite"></i>
        <p>${arr[i].strDescription}</p>
    </div>
    ` ;
    }
    document.getElementById('IngrediantsPlace').innerHTML=cartonna ;
}
let chosenin=[] ;
async function Choseningred(indexi) {
    let response =  await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredMain[indexi].strIngredient}`);
    let finalres = await response.json() ;
    chosenin=finalres.meals ;
    displayChoseningred(chosenin);
}
function displayChoseningred(arr) {
    let cartonna=`` ;
    for (let i = 0; i < arr.length; i++) {
        cartonna +=`<div  class="col-md-3 mealCard" onClick="searchById(${arr[i].idMeal})" >
        <img src="${arr[i].strMealThumb}" class="w-100 img-thumbnail" alt="meal">
        <div class="mealOverLay"><h3>${arr[i].strMeal}</h3></div>
    </div>` ;
        
    }
    document.getElementById('IngrediantsPlace').innerHTML=cartonna ;
}

$('#contactBtn').click(function () {

    close() ;
    $('#contactPage').removeClass('d-none') ;
    $('#contactPage').addClass('d-block') ;
    
})

function validate() {
    let ctrl =  document.getElementById('nameInput').value;
    let regex = /^[a-zA-Z ]{2,30}$/;
    if (regex.test(ctrl)==false) {
        $('#nameInput').css({borderColor:"red"});
        $('#nameAlert').removeClass('d-none');
        $('#nameAlert').addClass('d-block');
}else{
    $('#nameInput').css({borderColor:""});
    $('#nameAlert').removeClass('d-block');
    $('#nameAlert').addClass('d-none');
}
}
function emailvalidate() {
    let ctrl =  document.getElementById('emailInput').value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(ctrl)==false) {
        $('#emailInput').css({borderColor:"red"});
        $('#emailAlert').removeClass('d-none');
        $('#emailAlert').addClass('d-block');
        
}else{
    $('#emailInput').css({borderColor:""});
    $('#emailAlert').removeClass('d-block');
    $('#emailAlert').addClass('d-none');
}

}
function phonevalidate() {
    let ctrl =  document.getElementById('phoneInput').value;
    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(ctrl)==false) {
        $('#phoneInput').css({borderColor:"red"});
        $('#phoneAlert').removeClass('d-none');
        $('#phoneAlert').addClass('d-block');
        
}else{
    $('#phoneInput').css({borderColor:""});
    $('#phoneAlert').removeClass('d-block');
    $('#phoneAlert').addClass('d-none');
}

}
function agevalidate() {
    let ctrl =  document.getElementById('ageInput').value;
    let regex =/^[1-9]?[0-9]{1}$|^100$/;
    if (regex.test(ctrl)==false) {
        $('#ageInput').css({borderColor:"red"});
        $('#ageAlert').removeClass('d-none');
        $('#ageAlert').addClass('d-block');
        
}else{
    $('#ageInput').css({borderColor:""});
    $('#ageAlert').removeClass('d-block');
    $('#ageAlert').addClass('d-none');
}

}
function passvalidate() {
    let ctrl =  document.getElementById('passwordInput').value;
    let regex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (regex.test(ctrl)==false) {
        $('#passwordInput').css({borderColor:"red"});
        $('#passwordAlert').removeClass('d-none');
        $('#passwordAlert').addClass('d-block');
        
}else{
    $('#passwordInput').css({borderColor:""});
    $('#passwordAlert').removeClass('d-block');
    $('#passwordAlert').addClass('d-none');
}
// 
}
function repassvalidate() {
    let ctrl =  document.getElementById('repasswordInput').value;
    let ctrl1= document.getElementById('passwordInput').value;
    if (ctrl!=ctrl1) {
        $('#repasswordInput').css({borderColor:"red"});
        $('#repasswordAlert').removeClass('d-none');
        $('#repasswordAlert').addClass('d-block');
        
}else{
    $('#repasswordInput').css({borderColor:""});
    $('#repasswordAlert').removeClass('d-block');
    $('#repasswordAlert').addClass('d-none');
}
// 
}


