import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function TourCard() {
  return (
    <div className="w-80 m-4">
      <Card className="text-center">
        <Card.Header className="font-semibold">Moths of Shelby Park</Card.Header>
        <Card.Body>
          <Card.Text className="text-left"><FontAwesomeIcon icon={faLocationDot} /> Shelby Park</Card.Text>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button className="align-">View Tour Details</Button>
          <Button>Add To Itinerary</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
