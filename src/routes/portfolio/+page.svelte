<script lang='ts'>
  import PageTitle from '$components/pageTitle.svelte'
  import ProjectCard from '$components/projectCard.svelte';
  import icon_port from '$lib/assets/icon_port.svg'
  
  /*
  TODO: portifólio
  */

</script>


<div class="styled-01"> </div>
<section class="teste">
  <PageTitle appear={true} image={icon_port}><span class="bold">Portfólio</span></PageTitle>
</section>
<p class="main-text bord-01">
  Alguns dos <span class="grad-bold-01">ultimos</span>  projetos trabalhados que posso compartilhar ...
</p>
<section class="projects flex-column-center">
  <ProjectCard
    img='/imgs_portfolio/midiacode.png'
    img_label='midiacode - um serviço gerador de qrcode para as mais diversas necessidades'
    text='Desenvolvi todo o gerador de qr-code usando react que seria inserido posteriormente no wordpress com elementor'
    links={['https://midiacode.com/']}
  />
  <ProjectCard
    img='/imgs_portfolio/meuvista.png'
    img_label='meu vista - Plataforma de planejamento financeiro'
    text='Trabalhei durante um ano e meio com desenvolvimento front end em react, criando novas funcionalidades, corrigindo bugs, adaptando layouts, etc. Criei um bloco de notas para planejadores deixarem recados aos clientes, refatorei e melhorei o desempenho do projeto entre outras coisas. Criei uma POC(Prova de Conceito) para a refatoração do projeto para melhoria de usabilidade e implementei o whitelabel no projeto, também trabalhei com jira, com jenkins para deploys automatizados integrando na aws.'
    links={['https://meuvista.com/', 'https://app.meuvista.com/', 'https://refactor-experiment-vista-front.vercel.app/admin/home']}
  />
</section>


<style>
  .teste {
    width: 100%;
    margin-top: 8px;
  }

  .styled-01 {
    position: fixed;
  }
  .projects {
    gap: 32px;
  }
  @media screen and (min-width: 1120px) {.projects {flex-flow: row nowrap; align-items: stretch;}}

</style>