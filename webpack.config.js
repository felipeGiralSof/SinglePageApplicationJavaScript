const path = require('path');  /*Nos permite acceder a donde estamos en
las carpetas, ya sea en local o en la nube.*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); /*Archivo necesario 
para trabajar con HTML*/
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*Aqui se encuentra toda la configuracion de lo que va a suceder
Modulo para Exportar*/
module.exports = {

  entry: './src/index.js', /*Punto de entrada con su direccion. Aqui vive el
  codigo inicial y de aqui parte el desarrollo.*/
  output: {/*Donde se envia el proyecto estructurado y compilado listo
            para produccion*/
    path: path.resolve(__dirname, 'dist'),/*creamos el lugar donde se 
                                          exportara el proyecto*/
    filename: 'main.js', /*Este es el nombre del archivo final para produccion */
  },
  resolve:{
    extensions:['.js'],/*Extensiones que vamos a utilizar*/
  },
  module:{/*Se crea un modulo con las reglas necesarias que vamos a utilizar */
    rules:[ //Reglas
      {   //Estructura de Babel
        test: /\.js?$/, /*Nos permite identificar los archivos segun se 
                        encuentran en nuestro entorno*/
        exclude: /node_modules/, //excluimos la carpeta de node_modules
        use:{
          loader: 'babel-loader', /*Utilizar un loader como configuracion establecida */
        }
      },
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader',
        }
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          // "style-loader",
          //"sass-loader",
        ]
      },
    ]
  },
  plugins: [/*Establecemos los plugins que vamos a utilizar*/
    new HtmlWebpackPlugin(
      {
        inject: true,/*Como vamos a injectar un valor a un archivo HTML*/
        template: './public/index.html',/*Direccion donde se encuenta el template principal*/
        filename: './index.html',/*El nombre que tendra el archivo */
      }
    ),
    new MiniCssExtractPlugin(
      {
        filename: 'style/[name].css'
      }
    ),
  ]
}