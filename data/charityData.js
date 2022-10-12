export const shelter = {
  name: 'shelter',
  info: 'Shelter is a registered charity that campaigns for tenant rights in Great Britain. It gives advice, information and advocacy to people and lobbyies government and local authorities for new laws and policies. It works in partnership with Shelter Cymru in Wales and the Housing Rights Service in Northern Ireland.',
  imageUrl: require('../assets/shelter.png'),
};

export const redCross = {
  name: 'red cross',
  info: 'The British Red Cross Society is the United Kingdom body of the worldwide neutral and impartial humanitarian network the International Red Cross and Red Crescent Movement. The society was formed in 1870, and is a registered charity with more than 17,200 volunteers and 3,400 staff. At the heart of their work is providing help to people in crisis, both in the UK and overseas. ',
  imageUrl: require('../assets/redCross.jpeg'),
};

export const orphansInNeed = {
  name: 'orphans in need',
  info: 'Orphans in Need is a British charity dedicated to improving and empowering the lives of vulnerable orphans and widows. A UK based organisation, they operate throughout the world supporting 12,000 orphans in 14 countries. In 2015, Orphans in Need won the British Muslim Awards Muslim Charity of the Year Award for its work in the field of humanitarian relief. This was recognised at a gala event in Birmingham.',
  imageUrl: require('../assets/orphans-in-need.png'),
};

export const selectedCharity = opt => {
  let selection = {};
  switch (opt) {
    case 'homeless':
      selection = shelter;
      break;
    case 'refugee':
      selection = redCross;
      break;
    case 'orphan':
      selection = orphansInNeed;
      break;
  }
  return selection;
};
