$( document ).ready(function() {
  var responses=[
    {
    header: "Who are you as a designer?",
    answer: `<p> I consider myself as a <mark><span>graphic designer</span></mark>, and a part-time <mark><span>human-centered
    designer</mark></span>. Since I was little, I have always imagined myself growing bigger and getting
  more professional at creating visuals that convey more than just than a good appearance to the viewers. I am
  always looking forward to applying new skills on top of what I already know to enhance the outcome of the visual
  I am creating. </p>`
  },
  
  {
    header: "What is the most important thing you want people to take away from viewing your portfolio?",
    answer: `<p> One most important thing that I want people to take away from viewing my portfolio is that <mark><span>I am
    capable of creating multiple aspects of designs, such as graphic design, web design, art(drawing) design,
    and much more!</mark></span> I want people to know that I can be an all-rounder, and I can be good at a
  specific category as well.</p>`
  },
  
  {
    header: "What are your three strongest skills?",
    answer: `<p> My two out of three of my strongest skills are <mark><span>using photoshop/illustrator to create graphic art,
    and editing portraits to sharpen up the person in the shot and edit the colors and style to display a
    certain atmosphere. </mark></span>Photoshop is a tool that I have been in touch with since my elementary
    years, and throughout the years I have been creating graphics for celebrity forums from China. Although I did
    not discover Illustrator until my high school years, but I am still striving to learn new skills to improve
    myself when it comes to creating on Illustrator. I have not discovered my third one yet, but I am hoping that it
    will be web development coding.</p>`
  },
  
  {
    header: "What are you using for inspiration?",
    answer: `<p> Sources I use to find my inspiration: <mark><span>other people’s work that they post on Dribbble, DeviantArt,
    Bestfolios, Awwwards, etc. I follow a certain group of users from those websites in order to gain insights
    on different design styles, in order to improve my own.</mark></span> I tend to follow ones that I feel
  connected to, such as the way that they use colors and fonts, etc. When it comes to Dribbble, I focus more on
  the web and mobile app interface designs, whereas I use DeviantArt to look for graphic design inspirations.
  Awwwards and Bestfolios are used to understand current design trends and great examples to inspire my own
  portfolio.</p>`
  },
  
  ]
  
  responses.forEach(function(response){
  $('.general').append(`
    <div class="subhead">
      <h2>${response.header}</h2>
    </div>
  
    <div class="response">
      ${response.answer}
    </div>
  `)
  })
  
  console.log( "ready!" );
});


