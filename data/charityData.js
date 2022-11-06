export const disabled = {
  beneficiary: 'disabled',
  imageUrl: require('../assets/disabled.jpeg'),
};

export const wildAnimal = {
  beneficiary: 'wild animal',
  imageUrl: require('../assets/wildAnimal.jpeg'),
};

export const cancerPatient = {
  beneficiary: 'cancer patient',
  imageUrl: require('../assets/cancerPatient.jpeg'),
};

export const scope = {
  name: 'scope',
  info: 'Scope is a disability charity in England and Wales that campaigns to change negative attitudes about disability, provides direct services, and educates the public. The organisation was founded in 1952 by a group of parents and social workers who wanted to ensure that their disabled children had the right to a decent education.',
  imageUrl: require('../assets/scope.png'),
  beneficiary: disabled,
  alias: ['scope'],
};

export const sightSavers = {
  name: 'sight savers',
  info: 'Sightsavers is an international non-governmental organisation that works with partners in developing countries to treat and prevent avoidable blindness, and promote equality for people with visual impairments and other disabilities. It is based in Haywards Heath in the United Kingdom, with branches in Sweden, Norway, India, Italy, Republic of Ireland, the United Arab Emirates, and the US.',
  imageUrl: require('../assets/sightSavers.png'),
  beneficiary: disabled,
  alias: ['sight', 'saver', 'savers'],
};

export const leonardCheshire = {
  name: 'leonard cheshire disability',
  info: 'Sightsavers is an international non-governmental organisation that works with partners in developing countries to treat and prevent avoidable blindness, and promote equality for people with visual impairments and other disabilities. It is based in Haywards Heath in the United Kingdom, with branches in Sweden, Norway, India, Italy, Republic of Ireland, the United Arab Emirates, and the US.',
  imageUrl: require('../assets/leonard.jpeg'),
  beneficiary: disabled,
  alias: ['leonard', 'cheshire', 'disability'],
};

export const worldSociety = {
  name: 'world society',
  info: 'World Animal Protection, formerly The World Society for the Protection of Animals (WSPA) is an international non-profit animal rights organization that has been in operation since 1981. The charity describes its vision as: A world where animal rights matter and animal cruelty has ended. The charity has regional hubs in: Africa, Asia, Europe, Latin America and North America, and offices in 14 countries. Its headquarters is in London.',
  imageUrl: require('../assets/worldAnimalProtection.png'),
  beneficiary: wildAnimal,
  alias: ['world', 'society', 'protection', 'animals', 'animal'],
};

export const greenPeace = {
  name: 'green peace',
  info: 'Greenpeace is an independent global campaigning network. Greenpeace was founded in Canada in 1971 by Irving Stowe and Dorothy Stowe, immigrant environmental activists from the United States. Greenpeace states its goal is to [ensure the ability of the Earth to nurture life in all its diversity] and focuses its campaigning on worldwide issues such as climate change, deforestation, overfishing, commercial whaling, genetic engineering, and anti-nuclear issues. It uses direct action, lobbying, research, and ecotage[4] to achieve its goals.',
  imageUrl: require('../assets/greenPeace.jpeg'),
  beneficiary: wildAnimal,
  alias: ['green', 'peace'],
};

export const campaignClimate = {
  name: 'campaign against climate change',
  info: "The Campaign against Climate Change (variously abbreviated to CCC or CaCC) is a UK-based pressure group that aims to raise public awareness of anthropogenic climate change through mobilising mass demonstrations. Founded in 2001 in response to President Bush's rejection of the Kyoto Protocol, the organization saw a steady increase in attendance on marches before a sudden take-off in interest between October - December 2005. An estimated 10,000 people attended a rally in London on 3 December 2005. The following year on 4 November 2006 the Campaign organised a march from the US Embassy to the iCount event in Trafalgar Square. At least 25,000 people gathered in Trafalgar Square that day making it easily the biggest demonstration on climate change in the UK to date, until The Wave march in December 2009.",
  imageUrl: require('../assets/campaignClimate.jpeg'),
  beneficiary: wildAnimal,
  alias: ['campaign', 'climate', 'change'],
};

export const childrenBrain = {
  name: "children's tumor foundation",
  info: "The Children's Tumor Foundation is a foundation dedicated to improving the health and well-being of individuals and families affected by neurofibromatosis. Their four-part mission includes propelling drug research and development through a series of strategic investments, strengthening patient support, increasing public awareness of NF and establishing best practices in clinical care for affected individuals. The Foundation is incorporated in all 50 states with active chapters and affiliates in 37 states. CTF is the largest private funder of NF research.",
  imageUrl: require('../assets/childrenBrain.jpeg'),
  beneficiary: cancerPatient,
  alias: ['children', 'tumor'],
};

export const youngLives = {
  name: 'young lives vs cancer',
  info: "Young Lives vs Cancer is a charity in the United Kingdom formed in 2005. Young Lives vs Cancer is the UK's leading cancer charity for children, young people and their families. Its care teams provide specialist support across the UK.[2] Young Lives vs Cancer supports people from diagnosis onwards and aims to help the whole family deal with the impact of cancer and its treatment, life after treatment and, in some cases, bereavement.",
  imageUrl: require('../assets/youngLives.png'),
  beneficiary: cancerPatient,
  alias: ['young', 'lives', 'cancer'],
};

export const anthonyNolan = {
  name: 'anthony nolan',
  info: "Anthony Nolan is a UK charity that works in the areas of leukaemia and hematopoietic stem cell transplantation. It manages and recruits donors to the Anthony Nolan Register, which is part of an aligned registry that also includes the Welsh Bone Marrow Donor Registry, NHS Blood and Transplant's British Bone Marrow Registry and Deutsche DKMS UK. This aligned register is known as the Anthony Nolan & NHS Stem Cell Registry. It also carries out research to help make bone marrow transplants more effective.",
  imageUrl: require('../assets/anthonyNolan.jpeg'),
  beneficiary: cancerPatient,
  alias: ['anthony', 'nolan'],
};

// export const beneficiaryList = [homeless, refugee, orphans];

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

export const charityList = [
  scope,
  sightSavers,
  leonardCheshire,
  worldSociety,
  greenPeace,
  campaignClimate,
  childrenBrain,
  youngLives,
  anthonyNolan,
];

// export const charityList = [shelter, redCross, orphansInNeed];

export const beneficiaryList = () => {
  const result = [];
  charityList.map(charity => {
    const checkBene = obj =>
      obj.beneficiary === charity.beneficiary.beneficiary;
    if (!result.some(checkBene)) {
      result.push(charity.beneficiary);
    }
  });
  return result;
};
