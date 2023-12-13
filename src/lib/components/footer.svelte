<script lang='ts'>
  import LogoSymbol from "./logoSymbol.svelte";

  



  

</script>



<footer class="foo flex-column">
  <address class="info flex-column">
    <p>
      moro em <span>Sorocaba - SP</span> <br />
      meu telefone celular é: <br /> <span>(15) 9-8801-8431</span> <br />
      meus emails para contato são: <br />
      <span>marcelsussaideoliveira@hotmail.com </span> <br />
      <span>marcelsussaidev@gmail.com </span> <br />
      <span>marcelsussai@gmail.com</span> 
    </p>
  </address>
  <span class="devby">Desenvolvido por:</span>
  <section class="logotype flex-row-nowrap">
    <div class="logo">
      <LogoSymbol />
    </div>
    <div class="marcelsussai flex-row-nowrap">
      <span class="marcel">Marcel</span>
      <span class="sussai">Sussai</span>
    </div>
  </section>
</footer>

<!-- https://wa.me/5515988018431 -->

<style>
  .foo {
    width: 100dvw;
    min-height: 256px;
    background: var(--clr-grey-875);
    color: var(--clr-grey-025);
    padding: 12px 8px 22px 8px;
    gap: 8px;
  }
  @media screen and (min-width: 792px) {.foo {padding: 12px 8px 12px 288px;}}
  .info {
    /* border: solid 1px var(--clr-grey-850); */
    /* padding: 8px 16px; */
    border-radius: 32px 0;
  }
  .info p {
    font-size: 1.40rem;
    font-weight: 300;
    line-height: 1.56;
    padding-bottom: 32px;
    font-style: normal;
  }
  @media screen and (min-width: 792px) {.info p {font-size: 1.6rem;}}
  .info p span{
    padding: 4px;
    font-weight: 600;
    font-family: var(--font-mono);
    font-style: italic;
  }
  .marcelsussai {
    font-size: 2.4rem;
    font-family: var(--font-logo);
    font-weight: 900;
    line-height: 1;
    gap: 4px;
  }
  .logotype { gap: 4px; }
  .marcel { color: var(--clr-main-500); }
  .sussai { color: var(--clr-second-500); }
  .logo {
    max-width: 32px;
    max-height: 32px;
  }
  .devby {
    font-size: 1.32rem;
    font-weight: 300;
    line-height: 1;
  }
</style>