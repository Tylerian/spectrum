//@flow
import React from 'react';
//$FlowFixMe
import { Link } from 'react-router-dom';
//$FlowFixMe
import { connect } from 'react-redux';
// import { displayLoadingCard } from '../../../components/loading';
import { ListCardItem } from '../../../components/listCardItem';
import { TextButton } from '../../../components/buttons';
import Icon from '../../../components/icons';
import { Button } from '../../../components/buttons';
import { NullCard, NullTitle, NullSubtitle } from '../../../components/upsell';
import { openModal } from '../../../actions/modals';

import {
  StyledCard,
  ListHeading,
  ListContainer,
  ListFooter,
  MoreLink,
} from '../style';

const ListCard = ({ communities, dispatch }) => {
  if (communities && (communities !== 0 && communities !== null)) {
    return (
      <StyledCard>
        <ListHeading>My Communities</ListHeading>
        <ListContainer>
          {communities.map(item => {
            return (
              <Link key={item.node.id} to={`/${item.node.slug}`}>
                <ListCardItem
                  contents={item.node}
                  withDescription={false}
                  meta={`${item.node.metaData.members} members · ${item.node.metaData.channels} channels`}
                >
                  <Icon glyph="view-forward" />
                </ListCardItem>
              </Link>
            );
          })}
        </ListContainer>
        <ListFooter>
          <MoreLink to={`/explore`}>Find more...</MoreLink>
          <TextButton
            color="text.placeholder"
            onClick={() => dispatch(openModal('CREATE_COMMUNITY_MODAL'))}
          >
            New community
          </TextButton>
        </ListFooter>
      </StyledCard>
    );
  } else {
    return (
      <NullCard bg="community">
        <NullTitle>
          You're fresh out of communities!
        </NullTitle>
        <NullSubtitle>
          Let's find you something worth joining...
        </NullSubtitle>
        <Button icon="explore">
          Browse communities
        </Button>
      </NullCard>
    );
  }
};

export default connect()(ListCard);
