import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
    declarations: [PhotoComponent], // "privado"
    exports: [PhotoComponent] // dar acesso aos componentes, explicita quais omponentes serão disponibilizados
})
export class PhotosModule {}