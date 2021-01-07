using {s4hretail_acdoc as external} from './external/s4hretail_acdoc.csn';

service CatalogService {

    @readonly
    entity Products as projection on external.GetDataSet {
        key Matnr, Matkl
    };

    entity PostDataSet as projection on external.PostDataSet{
        key Data
    };

}