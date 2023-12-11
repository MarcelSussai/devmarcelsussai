<script lang='ts'>
  



  let clicked = false
  const handle_test_02 = () => clicked = !clicked

</script>



<section class="sec-test-02">
  <button on:click={handle_test_02}>virar</button>
  <div
    style={`--rotate: ${!clicked ? '0, 1, 0, 0deg' : '0, 1, 0, -180deg'};`}
    class="card-test-02 flex-center"
  >
    <div class="card-contents card-front flex-column-center">
      <div class="card-depth">
        <h2>Teste da frente</h2>
        <hr>
        <p>Olá Mundo do css 3d</p>
      </div>
    </div>
    <div class="card-contents card-back flex-column-center">
      <div class="card-depth">
        <h2>Teste de trás</h2>
        <hr>
        <p>Olá Mundo do css 3d</p>
      </div>
    </div>
  </div>
</section>



<style>
  .sec-test-02 { perspective: 800px; }
  .card-test-02 {
    --rotate:         0, 1, 0, 0deg;
    width:            400px;
    height:           400px;
    position:         relative;
    transition:       all 2s var(--cubic-easeInOutCirc);
    box-shadow:       0px 0px 4px var(--clr-grey-875-03);
    transform-style:  preserve-3d;
    transform:        rotate3d(var(--rotate));
  }
  .card-contents {
    width:                100%;
    height:               100%;
    justify-content:      center;
    position:             absolute;
    top:                  0;
    left:                 0;
    backface-visibility:  hidden;
  }
  .card-front, .card-back { transform-style: preserve-3d; }
  .card-front { background: var(--clr-main-150); }
  .card-back  { background: var(--clr-second-150); transform: rotate3d(0, 1, 0, 180deg); }
  .card-depth { transform: translate3d(0, 0, 100px); perspective: inherit; }
  button {
    width: 100%;
    padding: 8px;
    line-height: 1;
    border: solid 1px var(--clr-grey-025);
    background: var(--clr-grey-100);
    margin-bottom: 8px;
  }
</style>