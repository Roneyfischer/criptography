//arquivo com a rota inicial.
//a única finalidade é receber a rota inicial
//preferi separar entre dois arquivos de rotas pensando que em eventual aumento de rotas, é possível subdividir
//os setores  de acordo com o nicho, mantendo a organização; in casu, teve apenas fins didáticos

import general from "./general.js";

const fRouter = (app) => {
  app.use("/crypto", general);
};

export default fRouter;
