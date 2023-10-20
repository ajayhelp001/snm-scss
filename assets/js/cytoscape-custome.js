
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
  pan: { x: 500, y: 0 },
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
    .selector('#longmetroi')
      .css({
        'background-image': 'assets/image/map/LongMetRoi.png'
      })
    .selector('#nguyennhuhang')
      .css({
        'background-image': 'assets/image/map/NguyenNhuHang.png'
      })
    .selector('#phanledung')
      .css({
        'background-image': 'assets/image/map/PhanLeDung.png'
      })
  .selector('#trader')
      .css({
        'background-image': 'assets/image/map/QQ.png'
      })
  .selector('#phanlemailan')
      .css({
        'background-image': 'assets/image/map/MaiLan.png',        
      })
  .selector('#nanapham')
      .css({
        'background-image': 'assets/image/map/jeaMin.png'
      })
  .selector('#casithanhha')
      .css({
        'background-image': 'assets/image/map/CaSiThanhHa.png'
      })
  .selector('#qqthuytam')
      .css({
        'background-image': 'assets/image/map/QQ.png'
      })
    .selector('#quyenlam')
      .css({
        'background-image': 'assets/image/map/QuyenLam.png'
      })
    .selector('#thanhhahn')
      .css({
        'background-image': 'assets/image/map/ThanhHaHN.png'
      })
    .selector('#propertykoko')
      .css({
        'background-image': 'assets/image/map/PropertyKoko.png'
      })
    .selector('#nguyenngoclinh')
      .css({
        'background-image': 'assets/image/map/TraderLollipop.png'
      })
    .selector('#phamngocthanh')
      .css({
        'background-image': 'assets/image/map/Nana.png'
      })
      .selector('#auyenlinh')
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
      { "data": { "id": "nguyennhuhang", "popper": '<i class="fas fa-heart"></i>'  }, "classes": "background bottom-center" },			  
      { "data": { "id": "longmetroi" }, "classes": "background bottom-center" },
      { "data": { "id": "phanledung" }, "classes": "background bottom-center" },
      { "data": { "id": "trader" }, "classes": "background bottom-center" },
      { "data": { "id": "phanlemailan" }, "classes": "background bottom-center" },
      { "data": { "id": "nanapham"}, "classes": "background bottom-center" },
      { "data": { "id": "casithanhha"}, "classes": "background bottom-center" },
      { "data": { "id": "qqthuytam" }, "classes": "background bottom-center" },
      { "data": { "id": "quyenlam" }, "classes": "background bottom-center" },			  
      { "data": { "id": "thanhhahn" }, "classes": "background bottom-center" },			  
      { "data": { "id": "propertykoko" }, "classes": "background bottom-center" },			  
      { "data": { "id": "nguyenngoclinh" }, "classes": "background bottom-center" },			  
      { "data": { "id": "phamngocthanh" }, "classes": "background bottom-center" },
      { "data": { "id": "auyenlinh" }, "classes": "background bottom-center" },
    ],
    "edges": [
      { "data": { "id": "e12", "source": "nguyennhuhang", "target": "phanlemailan" } },
      { "data": { "id": "e1", "source": "phamngocthanh", "target": "phanlemailan", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e2", "source": "thanhhahn", "target": "phanlemailan", "arrow": "none" } },
      { "data": { "id": "e3", "source": "thanhhahn", "target": "quyenlam", "arrow": "none" } },
      { "data": { "id": "e4", "source": "longmetroi", "target": "phanlemailan", "arrow": "none" } },
      { "data": { "id": "e10", "source": "nanapham", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      { "data": { "id": "e8", "source": "nguyennhuhang", "target": "nanapham", "arrow": "none", "type": "none" } },
      { "data": { "id": "e16", "source": "qqthuytam", "target": "phanlemailan", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e17", "source": "qqthuytam", "target": "casithanhha", "arrow": "none", "type": "none" } },
      { "data": { "id": "e9", "source": "casithanhha", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      { "data": { "id": "e20", "source": "nguyenngoclinh", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      { "data": { "id": "e6", "source": "propertykoko", "target": "phanlemailan", "arrow": "none" } },
      { "data": { "id": "e13", "source": "trader", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      { "data": { "id": "e14", "source": "phanledung", "target": "thanhhahn", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e15", "source": "phanledung", "target": "phanlemailan", "arrow": "none", "type": "none" } },			  
      { "data": { "id": "e18", "source": "phanledung", "target": "phamngocthanh", "arrow": "none", "type": "none" } },			        
      { "data": { "id": "e19", "source": "auyenlinh", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      { "data": { "id": "e21", "source": "quyenlam", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      // { "data": { "id": "e20", "source": "nguyenngoclinh", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      // { "data": { "id": "e21", "source": "phamngocthanh", "target": "phanlemailan", "arrow": "none", "type": "none" } },
      

      
      			  			
    ]
  },

  layout: {
    name: 'preset',
    positions: {
        
        'auyenlinh': { x: 300, y: -200 },
        'nguyennhuhang': { x: 450, y: -200 },
        'longmetroi': { x: 800, y: -200 },
        'phanledung': { x: 800, y: -100 },
        'trader': { x: 800, y: 50 },
        'phanlemailan': { x: 550, y: 0 },// main
        'nanapham': { x: 300, y: -70 }, // Black with lipstick 300 -70
        'casithanhha': { x: 300, y: 200 },
        'qqthuytam': { x: 435, y: 200 },
        'quyenlam': { x: 800, y: 200 },
        'thanhhahn': { x: 550, y: 200 },
        'propertykoko': { x: 300, y: 70 }, 
        'nguyenngoclinh': { x: 650, y: 200 },
        'phamngocthanh': { x: 650, y: -200 },

        // Define positions for other nodes as needed
    },
    directed: true,
    padding: 10
  },
  popper: {
        enabled: true, // Enable the popper extension
        // ... Other popper configuration options ...
    }

    // Event handler for node click

}); // cy init

cy.panningEnabled()
cy.zoom(cy.zoom() * 1);
cy.on('tap', 'node', function (event) {
  var clickedNode = event.target;
  var node_id = clickedNode._private.data.id;
  var data_araay = clickedNode._private.edges;  
  
  // Hide all edges
  cy.elements('edge').style('display', 'none');

  // Show only the edges connected to the clicked node
  clickedNode.connectedEdges().style('display', 'element');

  // Show mutually connected edges
  if (clickedNode.connectedEdges().length > 1) {
    clickedNode.neighborhood().edges().style('display', 'element');
  }
  $('.row.userDistentCard .listItem').removeClass('active');
  var uniqueNodes = [];
  $.each(data_araay, function(index, edge) {
    var source = edge._private.data.source;
    var target = edge._private.data.target;
    
    // Add source and target to the uniqueNodes array if they are not already in it
    if (uniqueNodes.indexOf(source) === -1) {
      uniqueNodes.push(source);
    }
    if (uniqueNodes.indexOf(target) === -1) {
      uniqueNodes.push(target);
    }
  });
  var counterActive = 0;
  $.each(uniqueNodes, function(index, value) {
    $('.row.userDistentCard .listItem[data-id="'+value+'"]').addClass('active');
    counterActive++;
  });
  if(counterActive > 0) {    
    $('.counter-map-text span').html(counterActive);
    $('.counter-map-text').show();
  }
});



// Get references to the buttons
var zoomInButton = document.getElementById('zoom-in-button');
var zoomOutButton = document.getElementById('zoom-out-button');

// Add event listeners for zooming in and out
zoomInButton.addEventListener('click', function () {
cy.zoom(cy.zoom() * 1.1); // Increase zoom level by 20%
});

zoomOutButton.addEventListener('click', function () {
cy.zoom(cy.zoom() * 0.9); // Decrease zoom level by 20%
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
    var e19 = cy.getElementById('e19');
    var e20 = cy.getElementById('e20');
    var e21 = cy.getElementById('e21');

    var nguyennhuhang = cy.getElementById('nguyennhuhang');
    var longmetroi = cy.getElementById('longmetroi');
    var phanledung = cy.getElementById('phanledung');
    var trader = cy.getElementById('trader');
    var phanlemailan = cy.getElementById('phanlemailan');
    var nanapham = cy.getElementById('nanapham');
    var casithanhha = cy.getElementById('casithanhha');
    var qqthuytam = cy.getElementById('qqthuytam');
    var quyenlam = cy.getElementById('quyenlam');
    var thanhhahn = cy.getElementById('thanhhahn');


    var specificEdges = [e1, e2, e15, e4, e6, e9, e10, e11, e12, e13, e16, e19, e20, e21];

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



    var tippyA = makeTippy(nguyennhuhang, 'TWT News');

    tippyA.show();

    var tippyB = makeTippy(longmetroi, 'Phan Lê Mai Lan');

    tippyB.show();

    var tippyC = makeTippy(phanledung, 'Meme tươi đến từ rừng Pác Bó');

    tippyC.show();

    var tippyD = makeTippy(trader, 'Trader');

    tippyD.show();

    var tippyE = makeTippy(phanlemailan, 'Nguyễn Như Hằng');

    tippyE.show();

    var tippyF = makeTippy(nanapham, 'Trader Lollipop');

    tippyF.show();

    var tippyG = makeTippy(casithanhha, 'Nana Phạm');

    tippyG.show();

    var tippyH = makeTippy(qqthuytam, 'Koko Hạ Linh');

    tippyH.show();

    var tippyI = makeTippy(quyenlam, 'Cột Sống GenZ');

    tippyI.show();


    var makeDiv = function(text){
        var div = document.createElement('div');

        div.classList.add('popper-div');

        div.innerHTML = text;

        document.body.appendChild( div );

        return div;
    };

    // Nodes icon js start

    var tippynguyennhuhang = makeTippy(nguyennhuhang, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippynguyennhuhang.show();


    var tippylongmetroi = makeTippy(longmetroi, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippylongmetroi.show();

    var tippyphanledung = makeTippy(phanledung, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyphanledung.show();

    var tippytrader = makeTippy(trader, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippytrader.show();

    var tippycasithanhha = makeTippy(casithanhha, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippycasithanhha.show();

    var tippynanapham = makeTippy(nanapham, '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippynanapham.show();

    var tippyphanlemailan = makeTippy(phanlemailan, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyphanlemailan.show();

    var tippyqqthuytam = makeTippy(qqthuytam, '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    tippyqqthuytam.show();
    
    var qippyQuyenlam = makeTippy(quyenlam, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
    qippyQuyenlam.show();

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

