document.addEventListener('DOMContentLoaded', ()=>{
  // Highlight active nav link based on current location
  const setActiveNav = ()=>{
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .nav-btn').forEach(el=>{
      const href = el.getAttribute('href');
      if(href){
        el.classList.toggle('active', href === path || (href === 'index.html' && path === ''));
      }
    });
  };
  setActiveNav();

  // Simple contact form handling (no backend)
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const status = document.querySelector('.form-status');
      // basic validation already handled by required attributes
      status.textContent = 'Sende Nachricht...';
      // Simuliere Absenden
      setTimeout(()=>{
        status.textContent = 'Danke — deine Nachricht wurde (simuliert) gesendet.';
        form.reset();
      }, 800);
    });
  }

  // Support for legacy single-page panels if present
  const panels = document.querySelectorAll('.panel[id]');
  if(panels.length){
    // If URL has hash targeting a panel, show it
    const showPanel = (id)=>{
      document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
      const el = document.getElementById(id);
      if(el) el.classList.add('active');
    };
    if(location.hash){
      showPanel(location.hash.replace('#',''));
    }
    // attach data-target buttons if any
    document.querySelectorAll('button[data-target]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const t = btn.dataset.target;
        if(t) showPanel(t);
      });
    });
  }
});
