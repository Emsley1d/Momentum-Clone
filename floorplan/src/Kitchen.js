import React, { Component } from 'react';
import Oven from './Oven';
import Sink from './Sink';

const Kitchen = {
    render() {
        return (
            <div class="applicances">
                <Oven />
                <Sink />
            </div>
        )
    }

}

export default Kitchen
