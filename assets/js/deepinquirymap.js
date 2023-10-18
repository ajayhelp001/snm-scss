var cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,
  autounselectify: true,
  zoom: 0.2,
  pan: { x: 300, y: 150 },
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
    .selector("#phanlemailan")
    .css({
      "background-image":
        "assets/image/map/MaiLan.png",
    })
    .selector("#KienKhongNgu")
    .css({
      "background-image":
        "assets/image/map/KienKhongNgu.png",
    })
    .selector("#genz")
    .css({
      "background-image":
        "assets/image/map/genz.png",
    })
    .selector("#Eva")
    .css({
      "background-image":
        "assets/image/map/Eva.png",
    })
    .selector("#nguyennhuhang")
    .css({
      "background-image":
        "assets/image/map/NguyenNhuHang.png",
    })
    .selector("#bikerAnTon")
    .css({
      "background-image":
        "assets/image/map/bikerAnTon.png",
    })
    .selector("#nanapham")
    .css({
      "background-image":
        "assets/image/map/Nana.png",
    })
    .selector("#kokohalinh")
    .css({
      "background-image": "assets/image/map/map_post.svg",
      "height": "64px", // Increase node size
      "width": "64px", 
      "border-radius": 10,
      "border-color": "red",
      "border-width": "0px",
      "line-style": "solid",
      "position": "relative",
    })
    
    .selector("#Zane")
    .css({
      "background-image":
        "assets/image/map/Zane.png",
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
    { "data": { "id": "KienKhongNgu", "popper": '<i class="fal fa-heart"></i>'  }, "classes": "background bottom-center" },			  
    { "data": { "id": "phanlemailan" }, "classes": "background bottom-center" },
    { "data": { "id": "genz" }, "classes": "background bottom-center" },
    { "data": { "id": "Eva" }, "classes": "background bottom-center" },
    { "data": { "id": "nguyennhuhang" }, "classes": "background bottom-center" },
    { "data": { "id": "bikerAnTon"}, "classes": "background bottom-center" },
    { "data": { "id": "nanapham"}, "classes": "background bottom-center" },
    { "data": { "id": "kokohalinh" }, "classes": "background bottom-center" },
    { "data": { "id": "Zane" }, "classes": "background bottom-center" },			  
  ],
  "edges": [
    { "data": { "id": "e12", "source": "KienKhongNgu", "target": "nguyennhuhang" } },
    { "data": { "id": "e1", "source": "KienKhongNgu", "target": "phanlemailan", "arrow": "none", "type": "none" } },			  
    { "data": { "id": "e2", "source": "genz", "target": "phanlemailan", "arrow": "none" } },
    { "data": { "id": "e3", "source": "Eva", "target": "phanlemailan", "arrow": "none" } },
    { "data": { "id": "e4", "source": "phanlemailan", "target": "nguyennhuhang", "arrow": "none" } },
    { "data": { "id": "e5", "source": "nanapham", "target": "phanlemailan", "arrow": "none" } },
    { "data": { "id": "e6", "source": "bikerAnTon", "target": "phanlemailan", "arrow": "none" } },
    { "data": { "id": "e7", "source": "Zane", "target": "phanlemailan", "arrow": "none" } },
    { "data": { "id": "e8", "source": "nanapham", "target": "bikerAnTon", "arrow": "none", "type": "none" } },
    { "data": { "id": "e9", "source": "nanapham", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
    { "data": { "id": "e10", "source": "bikerAnTon", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
    { "data": { "id": "e11", "source": "nanapham", "target": "Zane", "arrow": "none", "type": "none" } },
    
    { "data": { "id": "e13", "source": "genz", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },
    { "data": { "id": "e14", "source": "Eva", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
    { "data": { "id": "e15", "source": "Zane", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
    { "data": { "id": "e16", "source": "kokohalinh", "target": "nguyennhuhang", "arrow": "none", "type": "none" } },			  
    { "data": { "id": "e17", "source": "kokohalinh", "target": "phanlemailan", "arrow": "none", "type": "none" } },
    { "data": { "id": "e18", "source": "kokohalinh", "target": "KienKhongNgu", "arrow": "none", "type": "none" } }			  			

  ]
  },

  layout: {
  name: 'preset',
  positions: {
    KienKhongNgu: { x: 400, y: -200 },
    phanlemailan: { x: 0, y: 100 },
    genz: { x: 0, y: 400 },
    Eva: { x: 800, y: 400 },
    nguyennhuhang: { x: 800, y: 100 },
    bikerAnTon: { x: 300, y: 500 },
    nanapham: { x: 400, y: 180 },
    kokohalinh: { x: 400, y: 0 },
    Zane: { x: 600, y: 500 },
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
cy.style()
    .selector('#kokohalinh')
    .style({
        'shape': 'round-rectangle',   
        'background-color': '#3A3A3A',
        'object-fit': 'contain',
        'background-size': '50',
    })
    .update(); // apply changes
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

  var KienKhongNgu = cy.getElementById('KienKhongNgu');
  var phanlemailan = cy.getElementById('phanlemailan');
  var genz = cy.getElementById('genz');
  var Eva = cy.getElementById('Eva');
  var nguyennhuhang = cy.getElementById('nguyennhuhang');
  var bikerAnTon = cy.getElementById('bikerAnTon');
  var nanapham = cy.getElementById('nanapham');
  var kokohalinh = cy.getElementById('kokohalinh');
  var Zane = cy.getElementById('Zane');

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



  var tippyA = makeTippy(KienKhongNgu, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/group.svg" class="iconImg" /> <div class="text-center ms-2">Kiến Không Ngủ</div></div>');

  tippyA.show();

  var tippyB = makeTippy(phanlemailan, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Phan Lê <br> Mai Lan</div></div>');

  tippyB.show();

  var tippyC = makeTippy(genz, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/pages.svg" class="iconImg" /><div class="text-center ms-2">Cột Sống <br> GenZ</div></div>');

  tippyC.show();

  var tippyD = makeTippy(Eva, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Eva Ma</div></div>');

  tippyD.show();

  var tippyE = makeTippy(nguyennhuhang, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Nguyễn <br> Như Hằng</div></div>');

  tippyE.show();

  var tippyF = makeTippy(bikerAnTon, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Phan Lê <br> An Tôn</div></div>');

  tippyF.show();

  var tippyG = makeTippy(nanapham, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Phạm Ngọc Thanh</div></div>');

  tippyG.show();

  var tippyH = makeTippy(kokohalinh, 'Koko Hạ Linh');

  // tippyH.show();

  var tippyI = makeTippy(Zane, '<div class="d-flex align-items-center labels"><img src="assets/image/icon/singal-user-icon.svg" class="iconImg" /><div class="text-center ms-2">Zane <br> Rachel</div></div>');

  tippyI.show();


  var makeDiv = function(text){
    var div = document.createElement('div');

    div.classList.add('popper-div');

    div.innerHTML = text;

    document.body.appendChild( div );

    return div;
  };

  // Nodes icon js start

  // var tippyKienKhongNgu = makeTippy(KienKhongNgu, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyKienKhongNgu.show();


  // var tippyphanlemailan = makeTippy(phanlemailan, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyphanlemailan.show();

  // var tippygenz = makeTippy(genz, '<i class="fa-regular fa-file-lines" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippygenz.show();

  // var tippyEva = makeTippy(Eva, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyEva.show();

  // var tippynanapham = makeTippy(nanapham, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippynanapham.show();

  // var tippybikerAnTon = makeTippy(bikerAnTon, '<i class="fa-solid fa-user" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippybikerAnTon.show();

  // var tippynguyennhuhang = makeTippy(nguyennhuhang, '<i class="fa-solid fa-user" style="background-color: #8B80FD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippynguyennhuhang.show();

  
  // var tippyZane = makeTippy(Zane, '<i class="fa-solid fa-users" style="background-color: #BBBABD; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyZane.show();

  // Nodes icon js end
  

  // Edges icon js start
  // E1
  
  
  var tippyE1 = makeTippy(e1, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/groupmember.svg" class="w-100" /></div>');
  tippyE1.show();

  var tippyE2 = makeTippy(e2, '<div class="tippysingalIcon network_map_icon p-0"><img src="assets/image/icon/follows.svg" class="w-100" /></div>');
  tippyE2.show();

  // var tippyE3 = makeTippy(e3, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyE3.show();

  // var tippyE4 = makeTippy(e4, '<div class="tippysingalIcon network_map_icon regItem 2"><img src="assets/image/icon/twouser.svg" class="w-100" /></div>');
  // tippyE4.show();

  var tippyE5 = makeTippy(e5, '<div class="tippysingalIcon network_map_icon regItem 3"><img src="assets/image/icon/twouser.svg" class="w-100" /></div>');
  tippyE5.show();

  var tippyE7 = makeTippy(e7, '<div class="tippysingalIcon network_map_icon p-0"><img src="assets/image/icon/follows.svg" class="w-100" /></div>');
  tippyE7.show();

  var tippyE8 = makeTippy(e8, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/twouseryellow.svg" class="w-100" /></div>');
  tippyE8.show();

  var tippyE9 = makeTippy(e9, '<div class="tippysingalIcon network_map_icon regItem 4"><img src="assets/image/icon/twouser.svg" class="w-100" /></div>');
  tippyE9.show();

  var tippyE10 = makeTippy(e10, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/twouseryellow.svg" class="w-100" /></div>');
  tippyE10.show();

  var tippyE11 = makeTippy(e11, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/twouseryellow.svg" class="w-100" /></div>');
  tippyE11.show();
  
  var tippyE12 = makeTippy(e12, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/twouseryellow.svg" class="w-100" /></div>');
  tippyE12.show();
  
    var tippykokohalinh = makeTippy(e4, '<div class="tippysingalIcon network_map_icon regItem 1"><img src="assets/image/icon/twouser.svg" class="w-100" /></div>');
  tippykokohalinh.show();

  // var tippyE13 = makeTippy(e13, '<i class="fa-solid fa-users" style="background-color: #EA685E; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyE13.show();
  
  var tippyE14 = makeTippy(e14, '<div class="tippysingalIcon network_map_icon"><img src="assets/image/icon/twouseryellow.svg" class="w-100" /></div>');
  tippyE14.show();

  // var tippyE15 = makeTippy(e15, '<div class="icons-wrap-container"><span class="numerice-icon-number">2</span><i class="fa-regular fa-pen-to-square"></i><i class="fa-regular fa-thumbs-up"></i><i class="fa-solid fa-share"></i></div><i class="fa-solid fa-users" style="background-color: #F5B060; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyE15.show();

  // var tippyE17 = makeTippy(e17, '<i class="fa-solid fa-user-check" style="background-color: #00D1FF; color: #fff; padding: 5px; border-radius: 5px;"></i>');
  // tippyE17.show();
    var tippyE18 = makeTippy(e18, '<div class="tippysingalIcon network_map_icon conect"><img src="assets/image/icon/greenlink.svg" class="w-100" /></div>');
  tippyE18.show();


    // Create a new div element to act as the container
var tippyContainer = document.createElement('div');
tippyContainer.id = 'tippy-container'; // Give it an ID for styling if needed

// Append the Tippy elements to the container
tippyContainer.appendChild(tippyA.popper);
tippyContainer.appendChild(tippyB.popper);
tippyContainer.appendChild(tippyC.popper);
tippyContainer.appendChild(tippyD.popper);
tippyContainer.appendChild(tippyE.popper);
tippyContainer.appendChild(tippyF.popper);
tippyContainer.appendChild(tippyH.popper);
tippyContainer.appendChild(tippyI.popper);
tippyContainer.appendChild(tippyG.popper);
tippyContainer.appendChild(tippykokohalinh.popper);
tippyContainer.appendChild(tippyE1.popper);
tippyContainer.appendChild(tippyE2.popper);
tippyContainer.appendChild(tippyE5.popper);
tippyContainer.appendChild(tippyE7.popper);

tippyContainer.appendChild(tippyE8.popper);
tippyContainer.appendChild(tippyE9.popper);
tippyContainer.appendChild(tippyE10.popper);
tippyContainer.appendChild(tippyE11.popper);
tippyContainer.appendChild(tippyE12.popper);
tippyContainer.appendChild(tippyE14.popper);
tippyContainer.appendChild(tippyE18.popper);

// Append the container to the document body
document.body.appendChild(tippyContainer);
document.getElementById('cy').appendChild(tippyContainer);



  window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollY = window.scrollY;

// Iterate through nodes and edges, and update icons based on scroll position


});