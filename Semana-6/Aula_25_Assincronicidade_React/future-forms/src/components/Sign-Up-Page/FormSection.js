import React from 'react';
import styled from 'styled-components';

export function FormSection() {
    return (
        <div className="form-container">
            <form>
              <label>Nome:</label>
              <input type='text' /><br />
              <label>E-mail:</label>
              <input type='text' /><br />
              <button>Enviar</button>
            </form>            
        </div>
    )
}