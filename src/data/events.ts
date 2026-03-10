import { Event } from '@/@types'

// #region agent log
if (typeof fetch !== 'undefined') {
  fetch('http://127.0.0.1:7852/ingest/48cc3e33-15b3-4d2d-90f7-fc7216d8defe',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'17ced9'},body:JSON.stringify({sessionId:'17ced9',location:'src/data/events.ts:module load',message:'Módulo events.ts carregou com sucesso — import @/@types funcionou',data:{},hypothesisId:'H-C',timestamp:Date.now()})}).catch(()=>{})
}
// #endregion

export const events: Event[] = [
  {
    title: 'Neon Jungle 2025',
    date: '15 AGO',
    location: 'São Paulo, SP',
    img: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Tech-No Summit',
    date: '22 SET',
    location: 'Rio de Janeiro, RJ',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Golden Hour Gala',
    date: '10 OUT',
    location: 'Salvador, BA',
    img: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Electric Dreams',
    date: '05 NOV',
    location: 'Belo Horizonte, MG',
    img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop',
  },
]
