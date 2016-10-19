/* @flow */

import { config } from 'config';
import React from 'react';

const { contactEmail } = config;

const ErrorMessage = (): React$Element<any> => (
  <div>
    <p className="fw4 f4">Произошла ошибка при отправке сообщения.</p>
    <p>
      {'Извиняемся за неудобства. Пожалуйста, напишите нам на '}
      <a
        href={`mailto:${contactEmail}`}
        className="link red dim"
      >
        {contactEmail}
      </a>.
    </p>
  </div>
);

export default ErrorMessage;
