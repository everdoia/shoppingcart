/* 
Title:      ShoppingCart by Everdoia
Author:     @everdoia
*/

/***** Reset! Modified From: http://developer.yahoo.com/yui/reset *****/

body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td { margin: 0; padding: 0; }
table { border-collapse: collapse; border-spacing: 0; }
fieldset,img { border: 0; }
address,caption,cite,code,dfn,em,strong,th,var { font-style: normal; font-weight: normal; }
ol,ul { list-style: none; }
caption,th { text-align: left; }
h1,h2,h3,h4,h5,h6 { font-size: 100%; font-weight: normal; }
q:before,q:after { content: ''; }
abbr,acronym { border: 0; }
a { outline: none; text-decoration: none; }
a img { border: none; }
.clear { clear: both; font-size: 1px; line-height: 1px; overflow: hidden; visibility: hidden; width: 0; height: 0; }
.texthide { text-indent: -9999em; }

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
display:block;
}

body
{
background-image:url('http://media.npr.org/assets/img/2012/07/11/grocerygirl_wide-0acc5356c16636f6aa0c42016632ee61d4b11765.jpg');
background-size:1600px 900px;
background-repeat:no-repeat;
}

#wrap {
    margin: 0 auto;
    width: 100%;
    padding: 0;
}

/***** HEADER & NAVIGATION *****/


#primary {
    width: 100%;
    height: 20px;
    background-color: #000;
    margin-top: 0px;
    margin-bottom: 7px;
    padding-top: 7px;
    -webkit-box-shadow: 0px 0px 0px #ccc;
    -moz-box-shadow: 0px 0px 0px #ccc;
    box-shadow: 0px 0px 0px #ccc;
    font: bold 12px "Tahoma";
    letter-spacing: 1px;
}

#primary ul li {
    display: inline;
    padding-left: 8px;
}

#primary li a {
    padding: 5px 0px;
    color: gray;
    text-shadow: 0px 0px 0px #fff;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    
}

#primary li a:hover {
    color: #fff;
    
}


/************ JQUERY STUFF  ***************/
#canvas {
    
    width:500px;
    height:500px;
    border-radius:0px;
    background-color:;
    margin:0 auto;
    margin-top: 70px;
    margin-bottom:50px;
    border:1px solid #BBBBBB;
    text-align:center;
    padding:20px;
    z-index:1;
    
}

#textfield {
    
    width:300px;
    font-family: sans-serif;
    font-size:16px;
    border-radius:4px;
    float:left;
    height:25px;
    
}

#ShoppingList {
    
    text-align:left;
    float:left;
    font-family: sans-serif;
    font-size: 20px;
    width: 300px;
    height: 800px;
    margin-top: 20px;
    color: #fff;
    text-shadow:
    2px 2px 0 #000, 
    2px 2px 0 #000, 
    2px 2px 0 #000, 
    2px 2px 0 #000; 
}

#submit {
    font-family: sans-serif;
    font-size: 14px;
    font-weight: bold;
    background-color: #fff;
    padding: 6px;

}


.highlight {
    
    font-size: 20px;
    font-weight: bold;
    color: #000;
    text-shadow:
    2px 2px 0 #fff, 
    2px 2px 0 #fff,
    2px 2px 0 #fff, 
    2px 2px 0 #fff; 
}

