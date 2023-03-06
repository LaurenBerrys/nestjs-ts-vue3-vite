/*
 * @Author: Nie Chengyong
 * @Date: 2023-03-04 15:23:22
 * @LastEditors: Nie Chengyong
 * @LastEditTime: 2023-03-04 15:23:25
 * @FilePath: /nestjs-ts-vue3-vite/vue3/src/views/example/ArcGIS/type.ts
 * @Description: 
 * 
 */
interface GeometryProperties {
    /**
     * Indicates if the geometry has M values.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#hasM)
     */
    hasM?: boolean;
    /**
     * Indicates if the geometry has z-values (elevation).
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#hasZ)
     */
    hasZ?: boolean;
    /**
     * The spatial reference of the geometry.
     *
     * @default WGS84 (wkid: 4326)
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Geometry.html#spatialReference)
     */
    spatialReference?: SpatialReferenceProperties;
  }
  interface SpatialReferenceProperties {
    /**
     * An [image coordinate system](https://developers.arcgis.com/rest/services-reference/raster-ics.htm) defines the spatial reference used to display the image in its original coordinates without distortion, map transformations or ortho-rectification.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#imageCoordinateSystem)
     */
    imageCoordinateSystem?: any;
    /**
     * The well-known ID of a spatial reference.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkid)
     */
    wkid?: number;
    /**
     * The well-known text that defines a spatial reference.
     *
     * [Read more...](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-SpatialReference.html#wkt)
     */
    wkt?: string;
  }