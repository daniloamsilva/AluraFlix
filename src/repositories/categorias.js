import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
          const resposta = await respostaDoServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados :(');
      });
  }

function getAllWithVideos() {
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServer) => {
            if (respostaDoServer.ok) {
                const resposta = await respostaDoServer.json();
                return resposta;
            }
            throw new Error('Não foi possível pegar os dados');
        })
}

export default { getAllWithVideos, getAll }