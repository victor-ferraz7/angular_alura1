import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [PhotoComponent], // "privado"
    exports: [PhotoComponent], // dar acesso aos componentes, explicita quais omponentes serão disponibilizados
    imports: [HttpClientModule]
})
export class PhotosModule {}