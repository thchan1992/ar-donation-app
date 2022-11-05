export const menuScreenMsg = 'Please choose who you like to help?';

export const wrongCommandMsg = 'Command not recognised, please try again.';

export const charitySuggestionScreenMsg =
  'Here are the suggestions. Please choose any charities below.';

export const charityScreenMsg =
  'Would you like to know the charity detail? Say detail to reveal the charity info, or say donate to process the donation.';

export const getAmountScreenMsg = name => {
  return 'Please insert the amount you would like to donate to ' + name + '.';
};

export const donationMsg = (name, amount) => {
  return (
    'Your donation amount to ' +
    name +
    ' is: £' +
    amount +
    '. Please enter your credit card detail below.'
  );
};

export const completedMsg = (name, amount) => {
  return 'Thank you for your £' + amount + ' donation to ' + name + '!';
};
