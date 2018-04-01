import {Controller, Get} from '@nestjs/common';
import {SomeModel} from '@core/some-model';

console.log(SomeModel);

@Controller()
export class AppController {
    @Get()
    root(): string {
        return 'Hello World!';
    }
}
