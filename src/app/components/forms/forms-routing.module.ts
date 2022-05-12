import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedFormsComponent } from './advanced-forms/advanced-forms.component';
import { FormEditorComponent } from './form-editor/form-editor.component';
import { FormElementSizesComponent } from './form-element-sizes/form-element-sizes.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { FormTreeviewComponent } from './form-treeview/form-treeview.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { FormWizardComponent } from './form-wizard/form-wizard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'advanced-forms',
        component: AdvancedFormsComponent
      },
      {
        path: 'form-editors',
        component: FormEditorComponent
      },
      {
        path: 'form-element-sizes',
        component: FormElementSizesComponent
      },
      {
        path: 'form-elements',
        component: FormElementsComponent
      },
      {
        path: 'form-treeview',
        component: FormTreeviewComponent
      },
      {
        path: 'form-validations',
        component: FormValidationsComponent
      },
      {
        path: 'form-wizards',
        component: FormWizardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
