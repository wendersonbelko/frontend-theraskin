export const Features = (props) => {
  return (
    <div id='features' className='text-center' style={{ paddingTop: 10, paddingBottom: 10 }}>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Benefícios</h2>
        </div>
        <div className='row'>
          <div className='col-xs-8 col-md-4'>
            {' '}
            <i className="fa fa-flask"></i>
            <h3>O que são produtos dermatológicos?</h3>
            <p>Os dermocosméticos são produtos destinados aos cuidados com a pele, pois possuem ativos e substâncias que podem ser usadas em diferentes tratamentos dermatológicos, como anti-idade, redução de flacidez, manchas na pele e cicatrizes de acne.</p>
          </div>
          <div className='col-xs-8 col-md-4'>
            {' '}
            <i className="fa fa-question"></i>
            <h3>para que eles servem?</h3>
            <p>os democosmeticos agem nas camadas mais profundas da pele, promovendo modificações fisiológicas a fim de reduzir ou eliminar manchas, cicatrizes, flacidez ou outro problema na derme.</p>
          </div>
          <div className='col-xs-8 col-md-4'>
            {' '}
            <i className="fa fa-shield"></i>
            <h3>qual melhor forma de utiliza-los?</h3>
            <p>Isso dependerá de qual tipo sua pele é, comum, oleosa, mista ou seca? Se a sua pele é oleosa, procure produtos que ajudam a controlar a oleosidade e a melhorar o aspecto da sua pele. Mas, se você possui pele mista, utilize produtos promovam hidratação e nutrição da pele, além disso, sempre utilize um protetor solar ideal para o seu tipo, afim de proteger e ajudar ainda mais a sua pele a ficar cada vez mais saudavel!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
