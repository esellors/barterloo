import React, {Component} from 'react';
import {connect} from 'react-redux';
import AsPrimaryTagger from './AsPrimaryTagger';
import AsSecondaryTagger from './AsSecondaryTagger';

class OpenOffers extends Component {
   constructor(props) {
      super(props);
      this.state = {
          displayOfferId: null,
          lastDisplayedOfferId: null
      };
   }

   render() {
      const {newOffers, pendingOffersAsPrimary, pendingOffersAsSecondary} = this.props;
      const {displayOfferId} = this.state;

      return (
         <div className='offers_container'>
            <div className='offers_detail_section'>
               <h5>New Tags From Others</h5>

                  <AsSecondaryTagger offers={newOffers} section='section1' />
   
            </div>

            <div className='offers_detail_section'>
               <h5>Open Tags You Started</h5>

                  <AsPrimaryTagger offers={pendingOffersAsPrimary} section='section2' />
   
            </div>

            <div className='offers_detail_section'>
               <h5>Open Tags Others Started</h5>

                  <AsSecondaryTagger offers={pendingOffersAsSecondary} section='section3' />
   
            </div>
         </div>
      );
   }
}

const mapStateToProps = reduxState => {
   const {newOffers, pendingOffersAsPrimary, pendingOffersAsSecondary} = reduxState.offers;

   return {
      newOffers,
      pendingOffersAsPrimary,
      pendingOffersAsSecondary
   }
}

export default connect(mapStateToProps)(OpenOffers)