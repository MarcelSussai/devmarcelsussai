<script lang="ts">
  import { onMount } from 'svelte'
  import { spring } from 'svelte/motion'
  import createGlobe from 'cobe'



  const size_spring_x = spring(100, {
    stiffness: 0.3, damping: 0.4, precision: 0.005,
  })
  const size_spring_y = spring(100, {
    stiffness: 0.3, damping: 0.4, precision: 0.005,
  })

  let cv:             HTMLCanvasElement
  let pointer_x:      number | null       = null
  let pointer_y:      number | null       = null
  let pointer_move_x: number              = 0
  let pointer_move_y: number              = 0

  const adjust_pointers = (cx: number, cy: number) => {
    pointer_x = cx - pointer_move_x
    pointer_y = cy - pointer_move_y
  }

  const move_pointers = (cx: number, cy: number) => {
    if (pointer_x && pointer_y) {
      const delta_x           = cx - pointer_x
      const delta_y           = cy - pointer_y
      pointer_move_x          = delta_x
      pointer_move_y          = delta_y
      size_spring_x.stiffness = delta_x / 100
      size_spring_y.stiffness = delta_y / 100
    }
  }

  const cancel_pointers = () => {
    pointer_x = null
    pointer_y = null
    cv.style.cursor = 'grab'
  }

  const handle_pointerDown = (e: PointerEvent) => {
    adjust_pointers(e.clientX, e.clientY)
    cv.style.cursor = 'grabbing'
  }
  const handle_pointerUp  = (e: PointerEvent) => { cancel_pointers() }
  const handle_pointerOut = (e: PointerEvent) => { cancel_pointers() }
  const handle_mouseMove  = (e: MouseEvent) => {
    move_pointers(e.clientX, e.clientY)
  }
  const handle_touchMove  = (e: TouchEvent) => {
    move_pointers(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
  }

  onMount(() => {
    let phi    = 0
    let theta  = 0
    let width  = 0
    let height = 0
    const on_resize = () => cv &&
      (width = cv.offsetWidth) &&
      (height = cv.offsetHeight)
    window.addEventListener('resize', on_resize)
    on_resize()
    createGlobe(cv, {
      width:            width * 2,
      height:           height * 2,
      devicePixelRatio: 2,
      phi:              0,
      theta:            0,
      dark:             0.6,
      diffuse:          1,
      scale:            1,
      mapSamples:       6666,
      mapBrightness:    8888,
      baseColor:        [0.235294, 0.564706, 0.898039],
      glowColor:        [0.235294, 0.898039, 0.47451],
      markerColor:      [1, 1, 1],
      offset:           [0, 0],
      markers:          [],
      onRender: (state) => {
        if(!pointer_x) { phi += 0.006 }
        state.phi    = phi + size_spring_x.stiffness
        state.theta  = theta + size_spring_y.stiffness
        state.width  = width * 2
        state.height = height * 2
      },
    })
  })

</script>



<div class="all-globe">
  <canvas class="cv-globe"
    bind:this={cv}
    on:pointerdown={handle_pointerDown}
    on:mousemove={handle_mouseMove}
    on:pointerup={handle_pointerUp}
    on:pointerout={handle_pointerOut}
    on:touchmove|passive={handle_touchMove}
  ></canvas>
</div>



<style>
  .all-globe {
    --siz-01: 480px;
    --siz-02: calc(100dvw - 0px);
    --siz-03: 9dvw;
    --siz-04: calc(var(--siz-03) / 2);
    --siz-05: calc(var(--siz-02) - var(--siz-03));
    --siz-06: calc(var(--siz-01) - var(--siz-03));
    --clr-01: var(--clr-grey-075);
    --brd-01: solid 8px var(--clr-01);
    --brd-02: dashed 8px var(--clr-01);
    --ani-01: rotating 40s 0.0s linear infinite;
    --shd-01: 0px 0px 32px -2px var(--clr-grey-750-01);
  }
  .all-globe {
    width:        var(--siz-02);
    max-width:    var(--siz-01);
    height:       var(--siz-02);
    max-height:   var(--siz-01);
    aspect-ratio: 1;
    position:     relative;
    z-index:      1;
    transition: all .4s ease-in-out;
  }
  .all-globe::after {
    content:       '';
    animation:     var(--ani-01);
    position:      absolute;
    top:           var(--siz-04);
    left:          var(--siz-04);
    width:         var(--siz-05);
    height:        var(--siz-05);
    max-width:     var(--siz-06);
    max-height:    var(--siz-06);
    border-left:   var(--brd-01);
    border-right:  var(--brd-01);
    border-top:    var(--brd-02);
    border-bottom: var(--brd-02);
    background:    var(--clr-grey-025-01);
    border-radius: 50%;
    z-index:       -1;
    /* box-shadow:    var(--shd-01); */
  }
  .cv-globe {
    background: transparent;
    position:   relative;
    width:      100%;
    height:     100%;
  }
  @media screen and (min-width: 480px) {
    .all-globe {
      --siz-03: 48px;
      --brd-01: solid 12px var(--clr-01);
      --brd-02: dashed 12px var(--clr-01);
    }
  }
  @media screen and (min-width: 1024px) {
    .all-globe {
      --siz-01: 560px;
    }
  }
  @media screen and (min-width: 1360px) {
    .all-globe {
      --siz-01: 568px;
      --brd-01: solid 16px var(--clr-01);
      --brd-02: dashed 16px var(--clr-01);
    }
  }
  @media screen and (min-width: 1800px) {
    .all-globe {--siz-01: 600px;}
  }
</style>