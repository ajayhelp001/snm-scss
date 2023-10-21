var cy = cytoscape({
  container: document.getElementById('cytoscape_chart_four'),

  boxSelectionEnabled: false,
  autounselectify: true,
  // zoom: 0.4,
  pan: { x: 300, y: 180 },
  style: cytoscape.stylesheet()  
  .selector('node')
    .css({
    'height': 64,
    'width': 64,
    'background-fit': 'cover',
    'border-color': '#3A3A3A',
    'border-width': 4,  
    'line-style': 'solid',
    'position': 'relative',
    
    })
  .selector('.eating')
    .css({
    'border-color': 'red',
    
    })
  .selector('.eater')
    .css({
    'border-width': 9,
    
    })
  .selector('edge')
    .css({
    'curve-style': 'bezier',
    'width': 3.5,
    'target-arrow-shape': '',
    'line-color': '#BBBABD',
    'target-arrow-color': '#BBBABD',
    'line-style': 'dashed'
    
    })
    .selector("#dinhhoangtung")
    .css({
      "background-image":
        "assets/image/map/Shark.png",
    })
    .selector("#offb")
    .css({
      "background-image":
        "assets/image/map/KienKhongNgu.png",
    })
    .selector("#anycar_two")
    .css({
      "background-image":
        "assets/image/map/anycar.png",
    })
    .selector("#dinhngoccham")
    .css({
      "background-image":
        "assets/image/map/PinkLu.png",
    })    
    
    .selector('node[label]')
    .css({
    'label': 'data(label)'
    })
  .selector('edge[label]')
    .css({
    'label': 'data(label)',
    'width': 3
    })
  .selector('.background')
    .css({
    'text-background-opacity': 1,
    'color': '#292C32',
    'font-family' : 'Be Vietnam Pro, sans-serif',
    'text-transform': 'lowercase',
    'text-background-color': '#EBEBF6',
    'text-background-shape': 'roundrectangle',
    'text-border-color': '#000',
    'text-border-width': 0,
    'font-weight': 500,
    'text-border-opacity': 1,
    'font-size': '12px',
    'border-style': 'solid'
    })
    .selector('.bottom-center')
    .css({
    'text-valign': 'bottom',
    'text-halign': 'center'
    })
    .selector('node[type]')
    .css({
    'label': 'data(type)'
    })
    .selector('.edge')
    .css({
    'width': 1,
    'curve-style': 'straight'
    })
    .selector('.edge[arrow]')
    .css({        
    'target-arrow-shape': 'none'
    })      
    .selector('edge[arrow="none"]') // Select edges with arrow="none"
    .css({
    'target-arrow-shape': 'none' // Remove the arrow shape for these edges
    }), 


  elements: {
  "nodes": [
    { "data": { "id": "offb", "popper": '<i class="fas fa-heart"></i>'  }, "classes": "background bottom-center" },			  
    { "data": { "id": "dinhhoangtung" }, "classes": "background bottom-center" },
    { "data": { "id": "anycar_two" }, "classes": "background bottom-center" },
    { "data": { "id": "dinhngoccham" }, "classes": "background bottom-center" },
  ],    
  "edges": [
    { "data": { "id": "e_four_1", "source": "offb", "target": "dinhhoangtung" } },
    { "data": { "id": "e_four_2", "source": "offb", "target": "dinhngoccham", "arrow": "none", "type": "none" } },			  
    { "data": { "id": "e_four_3", "source": "dinhhoangtung", "target": "dinhngoccham", "arrow": "none" } },
    { "data": { "id": "e_four_4", "source": "dinhngoccham", "target": "anycar_two", "arrow": "none" } },
    { "data": { "id": "e_four_5", "source": "anycar_two", "target": "dinhhoangtung", "arrow": "none" } },
  ]
  },

  layout: {
  name: 'preset',
  positions: {
    offb: { x: 400, y: -200 },
    dinhhoangtung: { x: 0, y: 100 },
    anycar_two: { x: 400, y: 400 },
    dinhngoccham: { x: 800, y: 100 },
    // Define positions for other nodes as needed
  },
  directed: true,
  padding: 10
  },
  popper: {
    enabled: true, // Enable the popper extension
    // ... Other popper configuration options ...
  }
}); // cy init


cy.panningEnabled()
function runCodeBasedOnScreenSize() {
  var windowWidth = window.innerWidth;

  if (windowWidth > 1600) {
    cy.zoom(cy.zoom() * 0.6);
  } else if (windowWidth > 1400) {
    cy.zoom(cy.zoom() * 0.5);
  } else {
    cy.zoom(cy.zoom() * 0.4);
  }
}

// Run the code initially and whenever the window is resized
runCodeBasedOnScreenSize();

$(window).resize(runCodeBasedOnScreenSize);
// cy.zoom(cy.zoom() * 1);
var edges = cy.elements('.edge');
// Apply a style to the selected edges
edges.style({
  'line-color': 'blue',
  'target-arrow-color': 'blue',
  'target-arrow-shape': 'none'
});

cy.edges().on('click', function(event) {
  var edge = event.target;

  if (edge.data('originalColor')) {
  // If the originalColor data exists, revert the color back
  edge.style({
    'line-color': edge.data('originalColor'),
    'target-arrow-color': edge.data('originalColor')
  });

  // Remove the originalColor data to reset the toggle
  edge.removeData('originalColor');
  } else {
  // Store the original color in a data attribute
  edge.data('originalColor', edge.style('line-color'));

  // Change the color of the clicked edge
  edge.style({
    'line-color': 'green', // Change to your desired color
    'target-arrow-color': 'green' // Change to your desired color
  });
  }

  // Prevent the event from propagating further
  event.stopPropagation();
});

cy.nodes().on('click', function(event) {
  var node = event.target;

  // Get the connected edges of the clicked node
  var connectedEdges = node.connectedEdges();

  connectedEdges.forEach(function(edge) {
  if (edge.data('originalColor')) {
    // If the originalColor data exists, revert the color back
    edge.style({
    'line-color': edge.data('originalColor'),
    'target-arrow-color': edge.data('originalColor')
    });

    // Remove the originalColor data to reset the toggle
    edge.removeData('originalColor');
  } else {
    // Store the original color in a data attribute
    edge.data('originalColor', edge.style('line-color'));

    // Change the color of the connected edge
    edge.style({
    'line-color': '#00D1FF', // Change to your desired color
    'target-arrow-color': '#00D1FF', // Change to your desired color
    'line-style': 'dashed'
    });
  }
  });

  // Prevent the event from propagating further
  event.stopPropagation();
});

  var e_four_1 = cy.getElementById('e_four_1');
  var e_four_2 = cy.getElementById('e_four_2');  
  var e_four_3 = cy.getElementById('e_four_3');
  var e_four_4 = cy.getElementById('e_four_4');
  var e_four_5 = cy.getElementById('e_four_5');

  
  var offb = cy.getElementById('offb');
  var dinhhoangtung = cy.getElementById('dinhhoangtung');
  var anycar_two = cy.getElementById('anycar_two');
  var dinhngoccham = cy.getElementById('dinhngoccham');

  var specificEdges = [e_four_3];
  // var specificEdges = [e_four_1, e_four_2, e_four_3, e_four_4, e_four_5];

  specificEdges.forEach(function(edge) {
  edge.style({
    'line-color': '#00d1ff', // Change to your desired color
    'target-arrow-color': '#00d1ff', // Change to your desired color
    'line-style': 'dashed'
  });
  });

  var makeTippy = function(ele, text){
    var ref = ele.popperRef();

    // Since tippy constructor requires DOM element/elements, create a placeholder
    var dummyDomEle = document.createElement('div');

    var tip = tippy( dummyDomEle, {
      getReferenceClientRect: ref.getBoundingClientRect,
      trigger: 'manual', // mandatory
      // dom element inside the tippy:
      content: function(){ // function can be better for performance
        var div = document.createElement('div');

        div.innerHTML = text;

        return div;
      },
      // your own preferences:
      arrow: true,
      placement: 'bottom',
      hideOnClick: false,
      sticky: "reference",

      // if interactive:
      interactive: true,
      appendTo: document.body // or append dummyDomEle to document.body
    } );

    return tip;
  };



  var tippyA = makeTippy(offb, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/group.svg" class="iconImg" /> <div class="text-center ms-2">OFFB</div></div>');

  tippyA.show();

  var tippyB = makeTippy(dinhhoangtung, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /> <div class="text-center ms-2">Đinh Hoàng Tùng</div></div>');

  tippyB.show();

  var tippyC = makeTippy(anycar_two, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/group.svg" class="iconImg" /> <div class="text-center ms-2">Anycar 2.0</div></div>');

  tippyC.show();

  var tippyD = makeTippy(dinhngoccham, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /> <div class="text-center ms-2">Đinh Ngọc Châm</div></div>');

  tippyD.show();


  

  var makeDiv = function(text){
    var div = document.createElement('div');

    div.classList.add('popper-div');

    div.innerHTML = text;

    document.body.appendChild( div );

    return div;
  };

  // Nodes icon js start

//   var tippyoffb = makeTippy(offb, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
//   tippyoffb.show();


  



  // Nodes icon js end
  

  // Edges icon js start
  // E1
  
  
  var tippye_four_1 = makeTippy(e_four_1, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/groupmember.svg" class="w-100" /></div>');
  tippye_four_1.show();

  var tippye_four_3 = makeTippy(e_four_3, '<div class="tippysingalIcon network_map_icon regItem"><img src="assets/image/icon/twouser.svg" class="w-100" /></div>');
  tippye_four_3.show();

  var tippye_four_4 = makeTippy(e_four_4, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/groupmember.svg" class="w-100" /></div>');
  tippye_four_4.show();

  var tippye_four_5 = makeTippy(e_four_5, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/groupmember.svg" class="w-100" /></div>');
  tippye_four_5.show();

  
  var tippye_four_2 = makeTippy(e_four_2, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/groupmember.svg" class="w-100" /></div>');
  tippye_four_2.show();
  


  // Create a new div element to act as the container
var tippyContainer = document.createElement('div');
tippyContainer.id = 'tippy-container'; // Give it an ID for styling if needed

// Append the Tippy elements to the container
tippyContainer.appendChild(tippyA.popper);
tippyContainer.appendChild(tippyB.popper);
tippyContainer.appendChild(tippyC.popper);
tippyContainer.appendChild(tippyD.popper);
tippyContainer.appendChild(tippye_four_1.popper);
tippyContainer.appendChild(tippye_four_3.popper);
tippyContainer.appendChild(tippye_four_4.popper);
tippyContainer.appendChild(tippye_four_5.popper);
tippyContainer.appendChild(tippye_four_2.popper);

// Append the container to the document body
document.body.appendChild(tippyContainer);
document.getElementById('cytoscape_chart_four').appendChild(tippyContainer);

  window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollY = window.scrollY;

// Iterate through nodes and edges, and update icons based on scroll position


});
// Create a new div element to act as the container
