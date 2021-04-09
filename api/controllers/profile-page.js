module.exports = {


    friendlyName: 'View homepage or redirect',
  
  
    description: 'Display or redirect to the appropriate homepage, depending on login status.',
  
  
    exits: {
  
      success: {
        description: 'Requesting user is a guest, so show the public landing page.',
        viewTemplatePath: 'profile'
      },
  
    },

  
  
  };
  