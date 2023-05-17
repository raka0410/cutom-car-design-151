<head>
< script src="​​https://aframe.io/releases/0.6.0/aframe.min.js"></script>
</head>


AFRAME.registerComponent('car', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

