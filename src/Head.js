import React from 'react';
//vc pode selecionar as tags e fazer um effect para alterar em todo inicio de pagina
const Head = (props) => {
  React.useEffect(() => {
    document.title = `Dogs | ${props.title}`;
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', props.description);
  }, [props]);
  return <></>;
};

export default Head;
