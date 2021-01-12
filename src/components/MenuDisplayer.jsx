import React, { useState } from 'react';
import { Menu, Card } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppstoreOutlined } from '@ant-design/icons';
import '../assets/styles/components/MenuDisplayer.css';

const { SubMenu } = Menu;
const shortCutsMenus = [
    {
        key: 'sub1',
        title: 'Archivo',
        options: [
            {
                key: '1',
                content: 'Nuevo archivo',
                element: (
                  <>
                    <p>
                      Funcion que permite abrir un nuevo editor de codigo en blanco
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-warning badge-pill'>Ctrl + N</span>
                    </p>
                  </>),
            },
            {
                key: '2',
                content: 'Abrir archivo',
                element: (
                  <>
                    <p>
                      Funcion que permite abrir con el editor un archivo ya existente
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + O</span>
                    </p>
                  </>
                ),
            },
            {
                key: '3',
                content: 'Cerrar archivo',
                element: (
                  <>
                    <p>
                      Funcion que permite cerrar el archivo en edicion
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + F4</span>
                    </p>
                  </>
                ),
            },
            {
                key: '4',
                content: 'Guardar',
                element: (
                  <>
                    <p>
                      Funcion que permite guardar los cambios del editor en el archivo fuente
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + S</span>
                    </p>
                  </>
                ),
            },
            {
                key: '5',
                content: 'Guardar como',
                element: (
                  <>
                    <p>
                      Funcion que permite guardar los cambios del editor en un nuevo archivo fuente
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + Shift + S</span>
                    </p>
                  </>
                ),
            },
            {
                key: '6',
                content: 'Guardar todo',
                element: (
                  <>
                    <p>
                      Funcion que permite guardar todos los cambios de los editores en sus respectivos
                      archivos fuentes
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + K + S</span>
                    </p>
                  </>
                ),
            },
            {
                key: '7',
                content: 'Imprimir',
                element: (
                  <>
                    <p>
                      Funcion que permite mandar a imprimir el archivo actual
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + Alt + P</span>
                    </p>
                  </>
                ),
            },
        ],
    },
    {
        key: 'sub2',
        title: 'Editar',
        options: [
            {
                key: '8',
                content: 'Deshacer',
                element: (
                  <>
                    <p>
                      Funcion que permite deshacer el ultimo cambio hecho al archivo en edición
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + P</span>
                    </p>
                  </>
                ),
            },
            {
                key: '9',
                content: 'Rehacer',
                element: (
                  <>
                    <p>
                      Funcion que permite eehacer el ultimo cambio deshecho al archivo en edición
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + Y</span>
                    </p>
                  </>
                ),
            },
            {
                key: '10',
                content: 'Copiar',
                element: (
                  <>
                    <p>
                      Funcion que permite copiar en el portapapeles el texto seleccionado
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + C</span>
                    </p>
                  </>
                ),
            },
            {
                key: '11',
                content: 'Pegar',
                element: (
                  <>
                    <p>
                      Funcion que permite pegar el texto que se encuentre en el portapapeles al archivo en
                      edicion que este abierto
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + V</span>
                    </p>
                  </>
                ),
            },
            {
                key: '12',
                content: 'Cortar',
                element: (
                  <>
                    <p>
                      Funcion que permite remover del editor el texto seleccionado y copiarlo en el
                      portapapeles
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + X</span>
                    </p>
                  </>
                ),
            },
            {
                key: '13',
                content: 'Seleccionar todo',
                element: (
                  <>
                    <p>
                      Funcion que permite seleccionar todo el texto del archivo en edicion
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + A</span>
                    </p>
                  </>
                ),
            },
            {
                key: '14',
                content: 'Buscar',
                element: (
                  <>
                    <p>
                      Funcion que permite puscar una cadena de texto dentro del contenido del archivo en
                      edicion
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + F</span>
                    </p>
                  </>
                ),
            },
            {
                key: '15',
                content: 'Remplazar',
                element: (
                  <>
                    <p>
                      Funcion que permite buscar y remplazar una cadena de texto por otra dada por el usuario
                      dentro del contenido del archivo en edicion
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + H</span>
                    </p>
                  </>
                ),
            },
        ],
    },
    {
        key: 'sub3',
        title: 'Ejecutar',
        options: [
            {
                key: '16',
                content: 'Ejecutar analisis',
                element: (
                  <>
                    <p>
                      Funcion que permite ejecutar el analisis lexico y sintáctico del
                    </p>
                    <p>
                      Su atajo de teclado es:
                      <span className='badge badge-success badge-pill'>Ctrl + F6</span>
                    </p>
                  </>
                ),
            },
        ],
    },
];
const reservedWords = [
    {
        key: 'sub1',
        title: 'Tipos de datos',
        options: [
            {
                key: '1',
                content: 'entero',
                element: (
                  <>
                    <p>
                      La palabra reservada entero se utiliza para declarar una variable de tipo de dato
                      primitivo que represente a un numero
                      entero
                    </p>
                    <p>
                      Su equivalente en java seria la palabra:
                      <span className='badge badge-success badge-pill'>int</span>
                    </p>
                  </>
                ),
            },
            {
                key: '2',
                content: 'flotante',
                element: (
                  <>
                    <p>
                      La palabra reservada flotante se utiliza para declarar una variable de tipo de dato
                      primitivo que representa cuanquiel
                      numero racional.
                    </p>
                    <p>
                      Su equivalente en java seria la palabra:
                      <span className='badge badge-success badge-pill'>float</span>
                    </p>
                  </>
                ),
            },
        ],
    },
    {
        key: 'sub2',
        title: 'Flujo del código',
        options: [
          {
              key: '3',
              content: 'si',
              element: (
                <>
                  <p>
                    La palabra reservada si se utiliza para dirigir el flujo de ejecucion de programas
                    acorde a una condicion dada.
                  </p>
                  <p>
                    Su equivalente en java seria la palabra:
                    <span className='badge badge-success badge-pill'>if</span>
                  </p>
                </>),
          },
          {
              key: '4',
              content: 'sino',
              element: (
                <>
                  <p>
                    La palabra reservada sino se utiliza para dirigir el flujo de ejecucion de programas
                    acorde a la
                    {' '}
                    <b>negación</b>
                    {' '}
                    de una condicion dada.
                  </p>
                  <p>
                    Su equivalente en java seria la palabra:
                    <span className='badge badge-success badge-pill'>else</span>
                  </p>
                </>
              ),
          },
          {
              key: '5',
              content: 'switch',
              element: (
                <>
                  <p>
                    La palabra reservada switch se utiliza para dirigir el flujo de ejecucion de programas
                    acorde a los multiples casos de valor de una variable.
                  </p>
                  <p>
                    Su equivalente en java seria la palabra:
                    <span className='badge badge-success badge-pill'>switch</span>
                  </p>
                </>
              ),
          },
          {
              key: '6',
              content: 'caso',
              element: (
                <>
                  <p>
                    La palabra reservada caso se utiliza para decidir el flujo del codigo dado un valor
                    especifico de una
                    variable.
                  </p>
                  <p>
                    Su equivalente en java seria la palabra:
                    <span className='badge badge-success badge-pill'>case</span>
                  </p>
                </>
              ),
          },
            {
                key: '7',
                content: 'para',
                element: (
                  <>
                    <p>
                      La palabra reservada para se utiliza en la definicion de bucles que deben cumplir cierta
                      condicion para finalizar,
                      estableciendo parametros de inicio y la forma de iteracion para cumplir la condicion de
                      finalizacion.
                    </p>
                    <p>
                      Su equivalente en java seria la palabra:
                      <span className='badge badge-success badge-pill'>for</span>
                    </p>
                  </>
                ),
            },
            {
                key: '8',
                content: 'mientras',
                element: (
                  <>
                    <p>
                      La palabra reservada mientras se utiliza para establecer un bucle que se ejecutara
                      siempre y cuando una conndicion
                      sea evaluada como verdadera.
                    </p>
                    <p>
                      Su equivalente en java seria la palabra:
                      <span className='badge badge-success badge-pill'>while</span>
                    </p>
                  </>
                ),
            },
        ],
    },
    {
        key: 'sub3',
        title: 'Especiales del sistema',
        options: [
            {
                key: '9',
                content: 'principal',
                element: (
                  <>
                    <p>
                      La palabra reservada principal se utiliza para declarar el metodo de inicio de un
                      programa.
                    </p>
                    <p>
                      Su equivalente en java seria la palabra:
                      <span className='badge badge-success badge-pill'>main</span>
                    </p>
                  </>
                ),
            },
            {
                key: '10',
                content: 'escribir',
                element: (
                  <>
                    <p>
                      La palabra reservada escribir se utiliza para indicarle al sistema que se desea mandar un
                      mensaje por consola al momento de correr un programa.
                    </p>
                    <p>
                      Su equivalente en python seria la palabra:
                      <span className='badge badge-light badge-pill'>print</span>
                    </p>
                  </>
                ),
            },
            {
                key: '11',
                content: 'leer',
                element: (
                  <>
                    <p>
                      La palabra reservada leer se utiliza para indicarle al sistema que se desea recibir un
                      valor por medio del teclado al momento de correr un programa.
                    </p>
                    <p>
                      Su equivalente en c# seria la palabra:
                      <span className='badge badge-dark badge-pill'>Console.ReadLine()</span>
                    </p>
                  </>
                ),
            },
        ],
    },
];

const MenuDisplayer = (props) => {
    const { isShortCuts, isReservedWords } = props;
    let { menus } = props;

    if (isShortCuts) {
        menus = shortCutsMenus;
    }

    if (isReservedWords) {
        menus = reservedWords;
    }

    const rootSubmenuKeys = menus.map((menu) => menu.key);
    console.log(rootSubmenuKeys);

    const [state, setState] = useState({
        openKeys: ['sub1'],
        displayed: null,
    });

    const handleOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => state.openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setState({
            openKeys: keys,
            displayed: state.displayed,
          });
      } else {
        setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            displayed: state.displayed,
          });
      }
    };

    const handleClick = (option) => {
        setState({
            openKeys: state.openKeys,
            displayed: {
                title: option.content,
                content: option.element,
            },
          });
    };

    return (
      <div className='menudisplayer_container'>
        <div className='menudisplayer_container--menu'>
          <Menu mode='inline' openKeys={state.openKeys} onOpenChange={handleOpenChange} style={{ width: 256 }} theme='dark'>
            {menus.map((menu) => (
              <SubMenu key={menu.key} icon={<AppstoreOutlined />} title={menu.title}>
                {menu.options.map((option) => (
                  <Menu.Item key={option.key} onClick={() => { handleClick(option); }}>{option.content}</Menu.Item>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </div>
        <div className='menudisplayer_container--displayer'>
          {state.displayed && (
            <Card
              title={state.displayed.title}
              headStyle={{
                  backgroundColor: '#000c17',
                  color: '#ffffff',
                  fontSize: '24px',
              }}
              bodyStyle={{
                  backgroundColor: '#1890ff',
                  color: '#ffffff',
                  fontSize: '18px',
              }}
              bordered={true}
              style={{ width: '100%' }}
            >
              {state.displayed.content}
            </Card>
            )}
        </div>
      </div>
    );
};

export default MenuDisplayer;
