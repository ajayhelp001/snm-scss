
// photos from flickr with creative commons license
cytoscape('arrow-shape', 'my-custom-arrow', function (context, size, angle) {
  const halfSize = size / 2;
  const radians = angle * Math.PI / 180;
  
  const x1 = halfSize * Math.cos(radians);
  const y1 = halfSize * Math.sin(radians);
  
  const x2 = -halfSize * Math.cos(radians);
  const y2 = -halfSize * Math.sin(radians);
  
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
});
var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()  
    .selector('node')
      .css({
        'height': 62.63,
        'width': 62.63,
        'background-fit': 'cover',
        'border-color': '#00D1FF',
        'border-width': 3,
        'position': 'relative',
        'border-style': 'solid'
        
      })

    .selector('.eating')
      .css({
        'border-color': 'red',
        'border-style': 'solid'
      })
    .selector('.eater')
      .css({
        'border-width': 0,
        'border-style': 'solid'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'width': 2,
        'target-arrow-shape': '',
        'line-color': '#BBBABD',
        'target-arrow-color': '#BBBABD',
        'line-style': 'dashed',
        'source-arrow-shape': 'my-custom-arrow',
        'source-arrow-color': 'white',
        'target-arrow-rotation': '100deg'
        
      })
    .selector('#phanlemailan')
      .css({
        'background-image': 'assets/image/map/LongMetRoi.png'
      })
    .selector('#twtnews')
      .css({
        'background-image': 'assets/image/map/NguyenNhuHang.png'
      })
    .selector('#memetipac')
      .css({
        'background-image': 'assets/image/map/PhanLeDung.png'
      })
  .selector('#trader')
      .css({
        'background-image': 'assets/image/map/QQ.png'
      })
  .selector('#nguyennhuhang')
      .css({
        'background-image': 'assets/image/map/MaiLan.png',
        "shadow": {
          "offsetX": 5,
          "offsetY": 5,
          "blurRadius": 10,
          "color": "rgba(255, 255, 0, 0.5)"
        }
      })
  .selector('#traderlollipop')
      .css({
        'background-image': 'assets/image/map/jeaMin.png'
      })
  .selector('#nanapham')
      .css({
        'background-image': 'assets/image/map/CaSiThanhHa.png'
      })
  .selector('#kokohalinh')
      .css({
        'background-image': 'assets/image/map/QQ.png'
      })
    .selector('#cotsonggenz')
      .css({
        'background-image': 'assets/image/map/QuyenLam.png'
      })
    .selector('#nodeten')
      .css({
        'background-image': 'assets/image/map/ThanhHaHN.png'
      })
    .selector('#nodeele')
      .css({
        'background-image': 'assets/image/map/PropertyKoko.png'
      })
    .selector('#nodetwe')
      .css({
        'background-image': 'assets/image/map/TraderLollipop.png'
      })
    .selector('#nodethi')
      .css({
        'background-image': 'assets/image/map/Nana.png'
      })
      .selector('#nodeforth')
      .css({
        'background-image': 'assets/image/map/MeMaiLan.png'
      })
      .selector('node[label]')
      .css({
        'label': 'data(label)',
        'border-style': 'solid'
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
        // 'target-arrow-shape': 'none'
      })      
      .selector('edge[arrow="block"]') // Select edges with arrow="none"
      .css({
        'target-arrow-shape': 'block' // Remove the arrow shape for these edges
      }), 


  elements: {
    "nodes": [
      { "data": { "id": "twtnews", "popper": '<i class="fas fa-heart"></i>'  }, "classes": "background bottom-center" },			  
      { "data": { "id": "phanlemailan" }, "classes": "background bottom-center" },
      { "data": { "id": "memetipac" }, "classes": "background bottom-center" },
      { "data": { "id": "trader" }, "classes": "background bottom-center" },
      { "data": { "id": "nguyennhuhang" }, "classes": "background bottom-center" },
      { "data": { "id": "traderlollipop"}, "classes": "background bottom-center" },
      { "data": { "id": "nanapham"}, "classes": "background bottom-center" },
      { "data": { "id": "kokohalinh" }, "classes": "background bottom-center" },
      { "data": { "id": "cotsonggenz" }, "classes": "background bottom-center" },			  
      { "data": { "id": "nodeten" }, "classes": "background bottom-center" },			  
      { "data": { "id": "nodeele" }, "classes": "background bottom-center" },			  
      { "data": { "id": "nodetwe" }, "classes": "background bottom-center" },			  
      { "data": { "id": "nodethi" }, "classes": "background bottom-center" },
      { "data": { "id": "nodeforth" }, "classes": "background bottom-center" },
    ],
    "edges": [
      { "data": { "id": "e12", "source": "twtnews", "target": "nguyennhuhang" } },
      { "data": { "id": "e1", "source": "nodethi", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e2", "source": "nodeten", "target": "nguyennhuhang", "arrow": "none" } },
      { "data": { "id": "e3", "source": "nodeten", "target": "cotsonggenz", "arrow": "none" } },
      { "data": { "id": "e4", "source": "phanlemailan", "target": "nguyennhuhang", "arrow": "none" } },
      { "data": { "id": "e10", "source": "traderlollipop", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      { "data": { "id": "e8", "source": "twtnews", "target": "traderlollipop", "arrow": "none", "type": "none" } },
      { "data": { "id": "e16", "source": "kokohalinh", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e17", "source": "kokohalinh", "target": "nanapham", "arrow": "none", "type": "none" } },
      { "data": { "id": "e9", "source": "nanapham", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      { "data": { "id": "e20", "source": "nodetwe", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      { "data": { "id": "e6", "source": "nodeele", "target": "nguyennhuhang", "arrow": "none" } },
      { "data": { "id": "e13", "source": "trader", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      { "data": { "id": "e14", "source": "memetipac", "target": "nodeten", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e15", "source": "memetipac", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e18", "source": "memetipac", "target": "nodethi", "arrow": "none", "type": "none" } },			        
      { "data": { "id": "e19", "source": "nodeforth", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      
      { "data": { "id": "e21", "source": "cotsonggenz", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      // { "data": { "id": "e20", "source": "nodetwe", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      // { "data": { "id": "e21", "source": "nodethi", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
      

      
      			  			
    ]
  },

  layout: {
    name: 'preset',
    positions: {
        
        'nodeforth': { x: 300, y: -200 },
        'twtnews': { x: 450, y: -200 },
        'phanlemailan': { x: 800, y: -200 },
        'memetipac': { x: 800, y: -100 },
        'trader': { x: 800, y: 50 },
        'nguyennhuhang': { x: 550, y: 0 },// main
        'traderlollipop': { x: 300, y: -70 }, // Black with lipstick 300 -70
        'nanapham': { x: 300, y: 200 },
        'kokohalinh': { x: 475, y: 200 },
        'cotsonggenz': { x: 800, y: 200 },
        'nodeten': { x: 550, y: 200 },
        'nodeele': { x: 300, y: 70 }, 
        'nodetwe': { x: 650, y: 200 },
        'nodethi': { x: 650, y: -200 },

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

// Get references to the buttons
var zoomInButton = document.getElementById('zoom-in-button');
var zoomOutButton = document.getElementById('zoom-out-button');

// Add event listeners for zooming in and out
zoomInButton.addEventListener('click', function () {
cy.zoom(cy.zoom() * 1.2); // Increase zoom level by 20%
});

zoomOutButton.addEventListener('click', function () {
cy.zoom(cy.zoom() * 0.8); // Decrease zoom level by 20%
});

var edges = cy.elements('.edge');

// Apply a style to the selected edges
edges.style({
  'line-color': 'blue',
  'target-arrow-color': 'blue',
  // 'target-arrow-shape': 'none'
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
      'line-color': '#00D1FF', // Change to your desired color
      'target-arrow-color': '#00D1FF' // Change to your desired color green
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

    var e1 = cy.getElementById('e1');
    var e2 = cy.getElementById('e2');
    var e3 = cy.getElementById('e3');
    var e4 = cy.getElementById('e4');
    var e5 = cy.getElementById('e5');
    var e6 = cy.getElementById('e6');
    var e7 = cy.getElementById('e7');
    var e8 = cy.getElementById('e8');
    var e9 = cy.getElementById('e9');
    var e10 = cy.getElementById('e10');
    var e11 = cy.getElementById('e11');
    var e12 = cy.getElementById('e12');
    var e13 = cy.getElementById('e13');
    var e14 = cy.getElementById('e14');
    var e15 = cy.getElementById('e15');
    var e16 = cy.getElementById('e16');
    var e17 = cy.getElementById('e17');
    var e18 = cy.getElementById('e18');


    var twtnews = cy.getElementById('twtnews');
    var phanlemailan = cy.getElementById('phanlemailan');
    var memetipac = cy.getElementById('memetipac');
    var trader = cy.getElementById('trader');
    var nguyennhuhang = cy.getElementById('nguyennhuhang');
    var traderlollipop = cy.getElementById('traderlollipop');
    var nanapham = cy.getElementById('nanapham');
    var kokohalinh = cy.getElementById('kokohalinh');
    var cotsonggenz = cy.getElementById('cotsonggenz');
    var nodeten = cy.getElementById('nodeten');


    var specificEdges = [e4, e5, e9];

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
            
            placement: 'bottom',
            hideOnClick: false,
            sticky: "reference",

            // if interactive:
            interactive: true,
            appendTo: document.body // or append dummyDomEle to document.body
        } );

        return tip;
    };



    var tippyA = makeTippy(twtnews, 'TWT News');

    tippyA.show();

    var tippyB = makeTippy(phanlemailan, 'Phan Lê Mai Lan');

    tippyB.show();

    var tippyC = makeTippy(memetipac, 'Meme tươi đến từ rừng Pác Bó');

    tippyC.show();

    var tippyD = makeTippy(trader, 'Trader');

    tippyD.show();

    var tippyE = makeTippy(nguyennhuhang, 'Nguyễn Như Hằng');

    tippyE.show();

    var tippyF = makeTippy(traderlollipop, 'Trader Lollipop');

    tippyF.show();

    var tippyG = makeTippy(nanapham, 'Nana Phạm');

    tippyG.show();

    var tippyH = makeTippy(kokohalinh, 'Koko Hạ Linh');

    tippyH.show();

    var tippyI = makeTippy(cotsonggenz, 'Cột Sống GenZ');

    tippyI.show();


    var makeDiv = function(text){
        var div = document.createElement('div');

        div.classList.add('popper-div');

        div.innerHTML = text;

        document.body.appendChild( div );

        return div;
    };

    // Nodes icon js start

    var tippytwtnews = makeTippy(twtnews, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippytwtnews.show();


    var tippyphanlemailan = makeTippy(phanlemailan, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyphanlemailan.show();

    var tippymemetipac = makeTippy(memetipac, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippymemetipac.show();

    var tippytrader = makeTippy(trader, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippytrader.show();

    var tippynanapham = makeTippy(nanapham, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippynanapham.show();

    var tippytraderlollipop = makeTippy(traderlollipop, '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippytraderlollipop.show();

    var tippynguyennhuhang = makeTippy(nguyennhuhang, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippynguyennhuhang.show();

    var tippykokohalinh = makeTippy(kokohalinh, '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippykokohalinh.show();
    
    var tippycotsonggenz = makeTippy(cotsonggenz, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippycotsonggenz.show();

    // Nodes icon js end
    

    // Edges icon js start
    // E1
    
    
    var tippyE1 = makeTippy(e1, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE1.show();

    var tippyE2 = makeTippy(e2, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE2.show();

    var tippyE3 = makeTippy(e3, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE3.show();

    var tippyE4 = makeTippy(e4, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><span class="numerice-icon-number">3</span></div>');
    tippyE4.show();

    var tippyE5 = makeTippy(e5, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><span class="numerice-icon-number">1</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-regular fa-comment-dots"></i></div>');
    tippyE5.show();

    var tippyE7 = makeTippy(e7, '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i><div class="icons-wrap-container"><span class="numerice-icon-number">1</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-regular fa-comment-dots"></i></div>');
    tippyE7.show();

    var tippyE8 = makeTippy(e8, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE8.show();

    var tippyE9 = makeTippy(e9, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE9.show();

    var tippyE10 = makeTippy(e10, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE10.show();

    var tippyE11 = makeTippy(e11, '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE11.show();
    
    var tippyE12 = makeTippy(e12, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE12.show();
    
    var tippyE13 = makeTippy(e13, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE13.show();
    
    var tippyE14 = makeTippy(e14, '<i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE14.show();

    var tippyE15 = makeTippy(e15, '<div class="icons-wrap-container"><span class="numerice-icon-number">2</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-solid fa-share"></i></div><i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE15.show();

    var tippyE17 = makeTippy(e17, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyE17.show();
    window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollY = window.scrollY;

// Iterate through nodes and edges, and update icons based on scroll position


});


    // Add edge images to the middle of edges