import Accordion from 'react-bootstrap/Accordion';

function Instrucciones() {
  return (
    <Accordion defaultActiveKey="0" flush className='p-5'>
      <Accordion.Item eventKey="0" className='m-3'>
        <Accordion.Header className='bg'>Solicita tu pedido</Accordion.Header>
        <Accordion.Body>
          Selecciona los platos que deseas pedir, agregalos al carrito de compra y los despacharemos al día siguiente.
          Pide antes de las 20hrs de hoy y llegará mañana durante el día!
No podemos asegurar una hora exacta de entrega, tu pedido llegará entre 13:30 y 20hrs.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='m-3'>
        <Accordion.Header>Congela tus Platos</Accordion.Header>
        <Accordion.Body>
        Tus platos llegarán congelados, solo debes seguir las instrucciones de como calentar los platos y listo!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2" className='m-3'>
        <Accordion.Header>Tiempo de congelación</Accordion.Header>
        <Accordion.Body>
        Los platos llegarán congelados, y tienen una durabilidad de 60 días si se mantienen en el freezer.
        Una vez descongelados, duraran 2 días en tú refrigerador
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3" className='m-3'>
        <Accordion.Header className='colorAcordeon'>Calienta tu plato</Accordion.Header>
        <Accordion.Body>
        Retira del freezer tu plato, hazle hollitos con el tenedor a la tapa plastica y calienta en microondas por al menos 5 minutos. ¡Disfura!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Instrucciones;