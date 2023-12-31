export class ChecklistTableSetting{
    public static setting = {
        mode: 'external',
        hideSubHeader: false,
        actions: {
          position: 'right',
          add: false,
          edit : false,
          delete : false,
          custom: [
            { name: 'previewRecord', title: 'Preview'},
            { name: 'editRecord', title: 'Edit'}
          ],
        },
        pager :{
          perPage : 10
        },
        columns: {
          category: {
            title: 'Category',
            // sort : false,
          },
          subcategory: {
            title: 'Subcategory',
            // sort : false,
          },
          caption: {
            title: 'Caption',
            // sort : false,
          },
          checkpoint: {
            title: 'Checkpoint ?',
            sort : false,
            width : "100px",
            class : "info checklist_forAll"
          },
          verifier: {
            title: 'Verifier Chk Id ?',
            sort : false,
            width : "110px",
            class : "info checklist_forAll"
          },
          approver: {
            title: 'Approver Chk Id ?',
            sort : false,
            //width : "100px",
            class : "info checklist_forAll"
          },
          geoFence: {
            title: 'GeoFence ?',
            sort : false,
            width : "85px",
            class : "info checklist_geoFence"
          },
          // icons: {
          //   title: 'Icons',
          //   // sort : false,
          //   width : "80px"
          // },
          catIcons: {
            title: 'Category Icon',
            // sort : false,
            width : "100px",
            type: 'html',
            valuePrepareFunction : (value) => { return `<img src="${value}" class="icon" />` }
          },
          subcatIcons: {
            title: 'Sub Category Icon',
            // sort : false,
            width : "120px",
            type: 'html',
            valuePrepareFunction : (value) => { return `<img src="${value}" class="icon"  />` }
          },
          capIcons: {
            title: 'Caption Icon',
            // sort : false,
            width : "90px",
            type: 'html',
            valuePrepareFunction : (value) => { return `<img src="${value}" class="icon"  />` }
          },
          active: {
            title: 'Active',
            // sort : false,
            width : "60px"
          }
        }
    }
}