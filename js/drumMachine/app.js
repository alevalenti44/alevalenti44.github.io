$(function() {

  let vol = ['50'];

  $('#slider-vertical').slider({
    orientation: 'vertical',
    range: 'min',
    min: 0,
    max: 100,
    value: 50,
    slide: function(event, ui) {
      $('#amount').val(ui.value);
      vol[0] = ui.value;
    },
  });

  $(document).on('keyup', function(event) {
    let keyNumPress = '#' + event.keyCode.toString();

    $(keyNumPress).addClass('animated pulse delay-2s faster ');
    setTimeout(() => {
      $(keyNumPress).removeClass('animated pulse delay-2s faster ');
    }, 400);

    let colors = [
      '#DDC6E7',
      '#B7DCF4',
      '#B5EFCE',
      '#F6D3AF',
      '#EBBAB4',
      '#FBEBA5',
      '#ADDED4',
    ];
    let randNum = Math.floor(Math.random() * colors.length);
    let randCol = colors[randNum];
    $('.container-fluid').css('background-color', randCol);
    let audio = document.createElement('audio');
    audio.src = 'samples/soundKitA/' + event.keyCode + '.wav';

      let newVol = vol.toString();
      newVol = newVol.split("");
      let audioVolume = '0.'+ newVol[0];
      let integer = Number(audioVolume);
      if(integer  === 0.1){
        integer = 1;
      }

      $('#sampleNameText').text('samples/soundKitA/' + event.keyCode + '.wav');
      audio.volume = integer;
      audio.play();
  });
});
