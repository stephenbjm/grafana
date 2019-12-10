import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { ConfirmButton } from './ConfirmButton';
import { withCenteredStory } from '../../utils/storybook/withCenteredStory';
import { action } from '@storybook/addon-actions';
import { Button } from '../Button/Button';

const getKnobs = () => {
  return {
    buttonText: text('Button text', 'Edit'),
    confirmText: text('Confirm text', 'Save'),
    confirmVariant: select(
      'Confirm variant',
      {
        primary: 'primary',
        secondary: 'secondary',
        danger: 'danger',
        inverse: 'inverse',
        transparent: 'transparent',
      },
      'primary'
    ),
    disabled: boolean('Disabled', false),
  };
};

storiesOf('UI/ConfirmButton', module)
  .addDecorator(withCenteredStory)
  .add('default', () => {
    const { buttonText, confirmText, confirmVariant, disabled } = getKnobs();
    return (
      <>
        <div className="gf-form-group">
          <div className="gf-form">
            <ConfirmButton
              confirmText={confirmText}
              disabled={disabled}
              confirmButtonVariant={confirmVariant}
              onConfirm={() => {
                action('Saved')('save!');
              }}
            >
              {buttonText}
            </ConfirmButton>
          </div>
        </div>
      </>
    );
  })
  .add('with custom button', () => {
    const { buttonText, confirmText, confirmVariant, disabled } = getKnobs();
    return (
      <>
        <div className="gf-form-group">
          <div className="gf-form">
            <ConfirmButton
              confirmText={confirmText}
              disabled={disabled}
              confirmButtonVariant={confirmVariant}
              onConfirm={() => {
                action('Saved')('save!');
              }}
            >
              <Button size="sm" variant="secondary" icon="fa fa-pencil">
                {buttonText}
              </Button>
            </ConfirmButton>
          </div>
        </div>
      </>
    );
  });