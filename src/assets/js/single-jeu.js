var singleJeuHandler={

  init:function(){


  },




  openModalValidation: function(){

    console.log("yo");

    $('#modal--cropper').addClass('active');

    $('.btn--modal-close').on('click', function(){
      closeModal();
    });

    $(document).keyup(function(e) {
      if(e.key === "Escape") {
        closeModal();
      }
    });

    $(document).on('click touchstart', '.modal--overlay.active', function(e){
      if( !$(e.target).is('.modal--wrapper') && $('.modal--wrapper').has(e.target).length === 0 ){
        closeModal();
      }
    });

    function closeModal() {
      $('#modal--cropper').removeClass('active');
    }
  },
};

module.exports=singleJeuHandler;
