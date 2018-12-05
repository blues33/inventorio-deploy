/**
 *
 * RestaurantCard
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button, Icon } from 'semantic-ui-react';

const RestaurantCard = props => (
  <Card>
    <Card.Content header={props.header} />
    <Card.Content description={props.description} />
    <Card.Content extra>
      <Link to="/dashboard">
        <Button content="Select" onClick={props.click} id={props.id} />
      </Link>
      <Button content="Edit" onClick={props.edit} id={props.id} />
      <Button icon floated="right" onClick={props.delete} id={props.id}>
        <Icon name="window close" />
      </Button>

      {/* <Icon onClick={props.click} name="info" id={props.id} /> */}
    </Card.Content>
    {/* <Card.Content extra>
      <Icon name= />4 Friends {JSON.stringify(props)}d
    </Card.Content> */}
  </Card>
);

RestaurantCard.propTypes = {
  header: PropTypes.any,
  description: PropTypes.any,
  // link: PropTypes.any,
  click: PropTypes.func,
  id: PropTypes.any,
  delete: PropTypes.func,
  edit: PropTypes.func,
};

export default RestaurantCard;
